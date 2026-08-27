<script setup>
import { ref, computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'

const route = useRoute()

const topics = ['國內旅遊', '日本', '韓國', '東南亞', '歐洲', '美加', '紐澳', '還不確定']

// 從目的地頁點過來時,網址會帶 ?topic=日本,這裡先幫使用者勾好
const initialTopic = topics.includes(route.query.topic) ? [route.query.topic] : []

const form = ref({
  name: '',
  phone: '',
  email: '',
  month: '',
  days: '',
  people: '2',
  budget: '',
  topics: initialTopic,
  contactPref: '電話',
  note: '',
})

const submitted = ref(false)
const errors = ref({})

const months = [
  '還不確定',
  '2026 年 9 月',
  '2026 年 10 月',
  '2026 年 11 月',
  '2026 年 12 月',
  '2027 年 1 月',
  '2027 年 2 月',
  '2027 年 3 月以後',
]
const dayOptions = ['3 天以內', '4—5 天', '6—8 天', '9 天以上', '還不確定']
const budgetOptions = [
  'NT$2 萬以下',
  'NT$2—4 萬',
  'NT$4—6 萬',
  'NT$6 萬以上',
  '想先聽建議',
]

const steps = [
  { n: 1, title: '送出諮詢單', text: '填寫你的旅行輪廓,不用很精確,有想法就好。' },
  { n: 2, title: '顧問回覆', text: '一個工作天內,由專屬顧問以你偏好的方式聯繫。' },
  { n: 3, title: '調整到剛剛好', text: '依你的預算與假期,一起把行程調整到最合適的樣子。' },
]

const faqs = [
  {
    q: '諮詢需要付費嗎?',
    a: '不需要。行程諮詢完全免費,也沒有一定要成行的義務,聊完覺得不合適隨時可以喊停。',
  },
  {
    q: '我還沒決定要去哪裡,可以先問嗎?',
    a: '可以,這也是最常見的狀況。只要告訴我們大概的假期長度與預算,顧問會直接提供幾個方向讓你挑。',
  },
  {
    q: '多久會收到回覆?',
    a: '週一至週五送出的諮詢,通常一個工作天內回覆;假日送出則會在下一個上班日處理。',
  },
  {
    q: '可以幫忙客製行程嗎?',
    a: '可以。現有行程都能依人數、天數與想去的景點調整,家庭旅遊、蜜月、員工旅遊也都能安排。',
  },
]

const contactSummary = computed(() =>
  form.value.contactPref === '電話' ? form.value.phone : form.value.email,
)

function submit() {
  const e = {}
  if (!form.value.name.trim()) e.name = '請留下方便稱呼你的名字'
  if (!form.value.phone.trim() && !form.value.email.trim())
    e.contact = '電話與 Email 至少要留一項,顧問才能與你聯繫'
  if (form.value.contactPref === '電話' && !form.value.phone.trim())
    e.contact = '你選擇以電話聯繫,請留下電話號碼'
  if (form.value.contactPref === 'Email' && !form.value.email.trim())
    e.contact = '你選擇以 Email 聯繫,請留下 Email'

  errors.value = e
  if (Object.keys(e).length) return

  submitted.value = true
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function reset() {
  submitted.value = false
  errors.value = {}
  form.value = {
    name: '',
    phone: '',
    email: '',
    month: '',
    days: '',
    people: '2',
    budget: '',
    topics: [],
    contactPref: '電話',
    note: '',
  }
}
</script>

<template>
  <div class="breadcrumb">
    <RouterLink to="/">首頁</RouterLink>
    <span class="sep">›</span>
    <span>諮詢行程</span>
  </div>

  <section class="page-head">
    <div class="head-inner">
      <div class="eyebrow">TRIP CONSULTATION</div>
      <h1>諮詢行程</h1>
      <p>把你的想法交給我們,剩下的交給專屬顧問。免費、不綁約,聊完再決定也可以。</p>
    </div>
  </section>

  <div class="layout">
    <!-- 送出後的確認畫面 -->
    <section v-if="submitted" class="done-card">
      <div class="done-mark">✓</div>
      <h2>諮詢單已送出</h2>
      <p class="done-lead">
        {{ form.name }},謝謝你的來信。顧問會在一個工作天內以<b>{{ form.contactPref }}</b>
        <template v-if="contactSummary">({{ contactSummary }})</template>
        與你聯繫。
      </p>

      <dl class="done-list">
        <div v-if="form.topics.length"><dt>想去的地方</dt><dd>{{ form.topics.join('、') }}</dd></div>
        <div v-if="form.month"><dt>預計出發</dt><dd>{{ form.month }}</dd></div>
        <div v-if="form.days"><dt>旅遊天數</dt><dd>{{ form.days }}</dd></div>
        <div><dt>旅客人數</dt><dd>{{ form.people }} 位</dd></div>
        <div v-if="form.budget"><dt>每人預算</dt><dd>{{ form.budget }}</dd></div>
        <div v-if="form.note.trim()"><dt>補充說明</dt><dd>{{ form.note }}</dd></div>
      </dl>

      <div class="done-actions">
        <RouterLink to="/plan" class="btn-primary">回去看看有哪些行程</RouterLink>
        <button class="btn-ghost" @click="reset">再填一張諮詢單</button>
      </div>
    </section>

    <!-- 諮詢表單 -->
    <section v-else class="form-col">
      <form @submit.prevent="submit" novalidate>
        <fieldset class="block">
          <legend class="block-label">STEP 01 — 怎麼聯繫你</legend>

          <div class="field">
            <label for="c-name">怎麼稱呼你 <span class="req">必填</span></label>
            <input
              id="c-name"
              v-model="form.name"
              type="text"
              placeholder="例如:王小姐"
              :class="{ invalid: errors.name }"
            />
            <p v-if="errors.name" class="err">{{ errors.name }}</p>
          </div>

          <div class="field-row">
            <div class="field">
              <label for="c-phone">聯絡電話</label>
              <input id="c-phone" v-model="form.phone" type="tel" placeholder="0912-345-678" />
            </div>
            <div class="field">
              <label for="c-email">Email</label>
              <input id="c-email" v-model="form.email" type="email" placeholder="you@example.com" />
            </div>
          </div>

          <div class="field">
            <span class="label-text">偏好聯繫方式</span>
            <div class="radio-row">
              <label v-for="p in ['電話', 'Email']" :key="p" class="radio">
                <input type="radio" :value="p" v-model="form.contactPref" />
                <span>{{ p }}</span>
              </label>
            </div>
            <p v-if="errors.contact" class="err">{{ errors.contact }}</p>
          </div>
        </fieldset>

        <fieldset class="block">
          <legend class="block-label">STEP 02 — 你的旅行輪廓</legend>

          <div class="field">
            <span class="label-text">想去的地方(可複選)</span>
            <div class="chip-row">
              <label v-for="t in topics" :key="t" class="chip">
                <input type="checkbox" :value="t" v-model="form.topics" />
                <span>{{ t }}</span>
              </label>
            </div>
          </div>

          <div class="field-row">
            <div class="field">
              <label for="c-month">預計出發</label>
              <select id="c-month" v-model="form.month">
                <option value="">請選擇</option>
                <option v-for="m in months" :key="m" :value="m">{{ m }}</option>
              </select>
            </div>
            <div class="field">
              <label for="c-days">旅遊天數</label>
              <select id="c-days" v-model="form.days">
                <option value="">請選擇</option>
                <option v-for="d in dayOptions" :key="d" :value="d">{{ d }}</option>
              </select>
            </div>
          </div>

          <div class="field-row">
            <div class="field">
              <label for="c-people">旅客人數</label>
              <select id="c-people" v-model="form.people">
                <option v-for="n in ['1', '2', '3', '4', '5', '6 以上']" :key="n" :value="n">
                  {{ n }} 位
                </option>
              </select>
            </div>
            <div class="field">
              <label for="c-budget">每人預算</label>
              <select id="c-budget" v-model="form.budget">
                <option value="">請選擇</option>
                <option v-for="b in budgetOptions" :key="b" :value="b">{{ b }}</option>
              </select>
            </div>
          </div>
        </fieldset>

        <fieldset class="block">
          <legend class="block-label">STEP 03 — 還有什麼想告訴我們的</legend>
          <div class="field">
            <label for="c-note">補充說明</label>
            <textarea
              id="c-note"
              v-model="form.note"
              rows="5"
              placeholder="例如:同行有長輩、想安排溫泉、不想太早起、希望多一點自由時間⋯⋯"
            ></textarea>
            <p class="hint">寫得越具體,顧問越能一次給到合適的建議。</p>
          </div>
        </fieldset>

        <div class="submit-row">
          <button type="submit" class="btn-primary">送出諮詢單</button>
          <p class="submit-note">免費諮詢・不綁約・一個工作天內回覆</p>
        </div>
      </form>
    </section>

    <!-- 側欄 -->
    <aside class="side">
      <div class="side-card">
        <h2 class="side-title">諮詢怎麼進行</h2>
        <ol class="steps">
          <li v-for="s in steps" :key="s.n">
            <span class="step-n">{{ s.n }}</span>
            <div>
              <h3>{{ s.title }}</h3>
              <p>{{ s.text }}</p>
            </div>
          </li>
        </ol>
      </div>

      <div class="side-card contact-card">
        <h2 class="side-title">想直接聊聊?</h2>
        <p class="contact-lead">上班時間來電,通常可以直接接到顧問。</p>
        <div class="contact-list">
          <p>📞 02-7755-6688</p>
          <p>✉️ hello@moritravel.com.tw</p>
          <p>🕐 週一至週五 09:30 – 18:30</p>
          <p>📍 台北市中山區南京東路二段 88 號 6 樓</p>
        </div>
      </div>
    </aside>
  </div>

  <section class="faq">
    <div class="faq-inner">
      <div class="eyebrow accent">FAQ</div>
      <h2>諮詢前,你可能想知道</h2>
      <div class="faq-grid">
        <div v-for="f in faqs" :key="f.q" class="faq-item">
          <h3>{{ f.q }}</h3>
          <p>{{ f.a }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.breadcrumb {
  font-size: 13px;
  color: #999;
  padding: 14px 40px 0;
  display: flex;
  gap: 6px;
}
.breadcrumb a {
  text-decoration: none;
  color: inherit;
}
.breadcrumb .sep {
  opacity: 0.6;
}

.eyebrow {
  font-size: 12.5px;
  letter-spacing: 2.2px;
  text-transform: uppercase;
  font-weight: 700;
  line-height: 1;
  color: #ffc4a3;
}
.eyebrow.accent {
  color: var(--color-accent);
}

/* 頁首 */
.page-head {
  background: var(--color-primary);
  color: #fff;
  margin-top: 10px;
  padding: clamp(40px, 5vw, 64px) 40px;
}
.head-inner {
  max-width: 1120px;
  margin: 0 auto;
}
.page-head h1 {
  font-size: clamp(30px, 4vw, 44px);
  font-weight: 700;
  margin: 12px 0 10px;
}
.page-head p {
  font-size: 15.5px;
  line-height: 1.9;
  color: #cfe0dd;
  max-width: 58ch;
  margin: 0;
}

/* 版面 */
.layout {
  max-width: 1120px;
  margin: clamp(32px, 4vw, 52px) auto clamp(48px, 6vw, 72px);
  padding: 0 40px;
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: clamp(28px, 3.5vw, 48px);
  align-items: start;
}

/* 表單 */
.block {
  border: none;
  padding: 0;
  margin: 0 0 34px;
}
.block-label {
  padding: 0;
  font-size: 12.5px;
  letter-spacing: 1.6px;
  color: var(--color-accent);
  font-weight: 700;
  margin-bottom: 16px;
}

.field {
  margin-bottom: 18px;
}
.field-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}
.field label,
.field .label-text {
  display: block;
  font-size: 13.5px;
  font-weight: 500;
  color: #2b2420;
  margin-bottom: 7px;
}
.req {
  font-size: 11.5px;
  font-weight: 400;
  color: var(--color-accent);
  background: #fdf1e0;
  border-radius: 4px;
  padding: 1px 6px;
  margin-left: 6px;
}

.field input[type='text'],
.field input[type='tel'],
.field input[type='email'],
.field select,
.field textarea {
  width: 100%;
  background: #ffffff;
  color: #2b2420;
  border: 1px solid #e7e0d6;
  border-radius: 8px;
  padding: 11px 14px;
  font: inherit;
  font-size: 14.5px;
  line-height: 1.6;
  transition: border-color 0.15s ease;
}
.field textarea {
  resize: vertical;
  min-height: 110px;
}
.field input:hover,
.field select:hover,
.field textarea:hover {
  border-color: #cdbfae;
}
.field input:focus,
.field select:focus,
.field textarea:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(10, 95, 97, 0.12);
}
.field input.invalid {
  border-color: #c2410c;
}
.field input::placeholder,
.field textarea::placeholder {
  color: #a89c8e;
}

.err {
  margin: 7px 0 0;
  font-size: 12.5px;
  color: #c2410c;
}
.hint {
  margin: 7px 0 0;
  font-size: 12.5px;
  color: #6b6259;
}

.radio-row {
  display: flex;
  gap: 10px;
}
.radio {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  border: 1px solid #e7e0d6;
  background: #fff;
  border-radius: 8px;
  padding: 9px 16px;
  font-size: 14px;
  cursor: pointer;
  margin: 0;
  transition:
    border-color 0.15s ease,
    background 0.15s ease;
}
.radio:hover {
  border-color: #cdbfae;
}
.radio:has(input:checked) {
  border-color: var(--color-primary);
  background: #eef4f2;
}
.radio input {
  accent-color: var(--color-primary);
  margin: 0;
}

.chip-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.chip {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  border: 1px solid #e7e0d6;
  background: #fff;
  border-radius: 999px;
  padding: 7px 15px;
  font-size: 13.5px;
  cursor: pointer;
  margin: 0;
  transition:
    border-color 0.15s ease,
    background 0.15s ease;
}
.chip:hover {
  border-color: #cdbfae;
}
.chip:has(input:checked) {
  border-color: var(--color-accent);
  background: #fdf1e0;
  color: var(--color-primary);
  font-weight: 500;
}
.chip input {
  accent-color: var(--color-accent);
  margin: 0;
}

.submit-row {
  border-top: 1px solid #e7e0d6;
  padding-top: 22px;
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}
.submit-note {
  font-size: 12.5px;
  color: #6b6259;
  margin: 0;
}

.btn-primary {
  display: inline-block;
  background: var(--color-accent);
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 14px 32px;
  font: inherit;
  font-size: 15px;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  transition: background 0.15s ease;
}
.btn-primary:hover {
  background: #d4551f;
}
.btn-ghost {
  background: none;
  border: 1px solid #e7e0d6;
  border-radius: 8px;
  padding: 13px 26px;
  font: inherit;
  font-size: 14.5px;
  color: var(--color-primary);
  cursor: pointer;
  transition: border-color 0.15s ease;
}
.btn-ghost:hover {
  border-color: var(--color-primary);
}

/* 送出後 */
.done-card {
  background: #fff;
  border: 1px solid #e7e0d6;
  border-radius: 16px;
  padding: clamp(28px, 3.5vw, 44px);
  box-shadow: 0 10px 30px rgba(43, 36, 32, 0.07);
}
.done-mark {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: var(--color-primary);
  color: #fff;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 18px;
}
.done-card h2 {
  font-size: 24px;
  color: var(--color-primary);
  margin: 0 0 10px;
}
.done-lead {
  font-size: 15px;
  line-height: 1.9;
  color: #2b2420;
  margin: 0 0 24px;
}
.done-list {
  margin: 0 0 28px;
  border-top: 1px solid #e7e0d6;
}
.done-list > div {
  display: grid;
  grid-template-columns: 110px 1fr;
  gap: 14px;
  padding: 11px 0;
  border-bottom: 1px solid #e7e0d6;
}
.done-list dt {
  font-size: 13px;
  color: #6b6259;
}
.done-list dd {
  margin: 0;
  font-size: 14.5px;
  color: #2b2420;
  line-height: 1.7;
}
.done-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

/* 側欄 */
.side {
  position: sticky;
  top: calc(var(--header-h) + 24px);
  display: grid;
  gap: 16px;
}
.side-card {
  background: #fff;
  border: 1px solid #e7e0d6;
  border-radius: 16px;
  padding: 24px 22px;
  box-shadow: 0 10px 30px rgba(43, 36, 32, 0.07);
}
.side-title {
  font-size: 16.5px;
  color: var(--color-primary);
  margin: 0 0 16px;
}
.steps {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 16px;
}
.steps li {
  display: flex;
  gap: 12px;
}
.step-n {
  flex-shrink: 0;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: #fdf1e0;
  color: var(--color-accent);
  display: grid;
  place-items: center;
  font-size: 13px;
  font-weight: 700;
}
.steps h3 {
  font-size: 14.5px;
  color: #2b2420;
  margin: 3px 0 4px;
}
.steps p {
  font-size: 13px;
  color: #6b6259;
  line-height: 1.7;
  margin: 0;
}

.contact-card {
  background: #fdf1e0;
  border-color: #f0e2cc;
  box-shadow: none;
}
.contact-lead {
  font-size: 13px;
  color: #6b6259;
  line-height: 1.7;
  margin: 0 0 14px;
}
.contact-list {
  display: grid;
  gap: 9px;
}
.contact-list p {
  font-size: 13.5px;
  color: #2b2420;
  margin: 0;
}

/* FAQ */
.faq {
  background: #fff;
  border-top: 1px solid #e7e0d6;
  padding: clamp(44px, 5vw, 68px) 40px;
}
.faq-inner {
  max-width: 1120px;
  margin: 0 auto;
}
.faq h2 {
  font-size: clamp(21px, 2.5vw, 27px);
  color: var(--color-primary);
  margin: 10px 0 28px;
}
.faq-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px 40px;
}
.faq-item h3 {
  font-size: 15.5px;
  color: #2b2420;
  margin: 0 0 7px;
}
.faq-item p {
  font-size: 13.5px;
  color: #6b6259;
  line-height: 1.85;
  margin: 0;
}

@media (max-width: 1024px) {
  .layout {
    grid-template-columns: 1fr;
    padding: 0 24px;
  }
  .side {
    position: static;
    grid-template-columns: 1fr 1fr;
  }
  .page-head,
  .faq {
    padding-inline: 24px;
  }
}

@media (max-width: 640px) {
  .breadcrumb {
    padding: 12px 16px 0;
  }
  .layout {
    padding: 0 16px;
  }
  .field-row {
    grid-template-columns: 1fr;
    gap: 0;
  }
  .side {
    grid-template-columns: 1fr;
  }
  .faq-grid {
    grid-template-columns: 1fr;
  }
  .page-head,
  .faq {
    padding-inline: 16px;
  }
  .done-list > div {
    grid-template-columns: 1fr;
    gap: 2px;
  }
}
</style>
