import Image from "next/image";

const navItems = [
  { href: "#physical-ai", label: "Physical AI" },
  { href: "#about", label: "About" },
  { href: "#activities", label: "Activities" },
  { href: "#contact", label: "Contact" },
];

const strengths = [
  {
    index: "01",
    title: "SO-101から始める",
    body: "学部前半から実機に触れ、SO-101から始めて、いずれヒューマノイド型へステップアップしていきます。",
  },
  {
    index: "02",
    title: "河原塚先生が直接サポート",
    body: "河原塚 健人先生（東京大学 講師）は、国の大型プロジェクト「ムーンショット計画 目標3」のプロジェクトマネージャー。人と共生するロボットの実現を国レベルで率いる、ロボット×AIの最前線を走る気鋭の研究者です。その第一人者が、UTAFを直接サポートしてくれています。",
  },
  {
    index: "03",
    title: "未経験から本格的に",
    body: "完全初学者中心。創設者も一緒に学び、技術力がある人も歓迎します。",
  },
];

const activities = [
  ["6月中", "全員でMuJoCo勉強会スタート"],
  ["7月中旬", "本郷キャンパス予定の活動場所決定・実機投入"],
  ["夏から半年後", "最初の成果物を公開"],
];

const goals = [
  {
    title: "学生の技術向上",
    body: "勉強会と実機開発を通じて、コンテストにも挑戦できる実践力を育てます。",
  },
  {
    title: "情報の集積・公開・還元",
    body: "学んだ知見を資料として整理し、ロボット産業に役立つ形で公開します。",
  },
  {
    title: "ロボット人材を増やす",
    body: "初学者が本格的な技術に触れる入口を広げ、日本の次世代人材を増やします。",
  },
];

export default function Home() {
  return (
    <main>
      <header className="sticky top-0 z-50 border-b border-black/10 bg-[rgba(249,248,243,0.88)] backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-8">
          <a href="#" className="flex items-center gap-3" aria-label="UTAF home">
            <Image
              src="/images/utaf-logo.png"
              alt="UTAF logo"
              width={52}
              height={52}
              priority
              className="h-11 w-11 object-contain"
            />
            <div className="leading-tight">
              <p className="text-sm font-black tracking-[0.18em] text-[var(--color-ink)]">
                UTAF
              </p>
              <p className="hidden text-xs font-semibold text-[var(--color-muted)] sm:block">
                University of Tokyo Autonomy Forge
              </p>
            </div>
          </a>
          <nav className="hidden items-center gap-6 text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-ink)] lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition hover:text-[var(--color-teal)]"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <section className="relative min-h-[82svh] overflow-hidden border-b border-black/10 bg-[var(--color-paper)]">
        <Image
          src="/images/hero-utaf-robotics.png"
          alt="Robotics workspace with a robot arm and simulation display"
          fill
          priority
          sizes="100vw"
          className="hero-image"
        />
        <div className="hero-overlay" />
        <div className="relative mx-auto flex min-h-[82svh] max-w-7xl items-center px-5 py-16 md:px-8">
          <div className="max-w-2xl">
            <p className="mb-5 font-mono text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-teal)]">
              The University of Tokyo Autonomy Forge
            </p>
            <h1 className="max-w-4xl text-balance text-[2.35rem] font-black leading-[1.04] text-[var(--color-ink)] sm:text-5xl md:text-7xl">
              日本の
              <br className="sm:hidden" />
              ロボット産業を、
              <br />
              もう一度、
              <br />
              世界の前へ。
            </h1>
            <p className="mt-7 max-w-2xl text-xl font-bold leading-relaxed text-[var(--color-teal)] md:text-2xl">
              フィジカルAIを学び、技術力を養う。
            </p>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--color-muted)]">
              UTAFは、東京大学フィジカルAI学生団体です。東大で学部前半からでも本気でロボットとAIに触れる場をつくり、未経験から実機を動かし、学びを公開し、日本のロボット産業を下支えします。
            </p>
            <div className="mt-9 flex flex-wrap gap-x-8 gap-y-3 text-sm font-black text-[var(--color-ink)]">
              <a
                href="mailto:info@utaf.dev?subject=UTAF%20%E5%85%A5%E4%BC%9A%E7%9B%B8%E8%AB%87"
                className="border-b-2 border-[var(--color-yellow)] pb-1 transition hover:text-[var(--color-teal)]"
              >
                入会について問い合わせる
              </a>
              <a
                href="#physical-ai"
                className="border-b-2 border-[var(--color-yellow)] pb-1 transition hover:text-[var(--color-teal)]"
              >
                Physical AIを知る
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="physical-ai"
        className="border-b border-black/10 bg-[var(--color-paper)] px-5 py-16 md:px-8 md:py-24"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionTitle eyebrow="Why it matters" title="Physical AIとは？" />
          <div className="space-y-8">
            <p className="text-2xl font-black leading-relaxed text-[var(--color-ink)]">
              センサで状況を認識し、AIで判断し、ロボティクスで行動するAI。
            </p>
            <p className="max-w-3xl text-base leading-8 text-[var(--color-muted)]">
              いま、世界が最も熱狂している技術。それが Physical AI。テスラ・NVIDIA・Google など世界のトップ企業が、こぞって人型ロボットとロボットAIに巨額を投資し、「次の主戦場」として開発を競っています。日本も国家プロジェクト「ムーンショット計画」として本気で取り組む、まさに時代の最前線。その最先端を、学生のうちから触れられるのがUTAFです。
            </p>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                ["Sensor", "目", "状況を認識"],
                ["AI", "脳", "判断・学習"],
                ["Robotics", "身体", "現実に作用"],
              ].map(([label, body, caption]) => (
                <div
                  key={label}
                  className="tech-card p-5"
                >
                  <p className="font-mono text-xs font-black uppercase tracking-[0.18em] text-[var(--color-teal)]">
                    {label}
                  </p>
                  <p className="mt-5 text-4xl font-black text-[var(--color-ink)]">
                    {body}
                  </p>
                  <p className="mt-3 text-sm font-bold text-[var(--color-muted)]">
                    {caption}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="grid-bg border-b border-black/10 px-5 py-16 md:px-8 md:py-24"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionTitle eyebrow="About UTAF" title="東大で、初学者から本気で触れる場をつくる。" />
          <div className="grid gap-5 md:grid-cols-2">
            <InfoBlock label="設立目的">
              東大で学部前半からでも本気でロボットとAIに触れる、唯一の場をつくる。
            </InfoBlock>
            <InfoBlock label="ミッション">
              フィジカルAIの技術力を学ぶ。
            </InfoBlock>
            <InfoBlock label="方針">
              未経験OK。完全初学者中心。創設者も一緒に学ぶ。
            </InfoBlock>
            <InfoBlock label="対象">
              東大生なら誰でも。技術力がある人も大歓迎。
            </InfoBlock>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-[var(--color-cream)] px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Why UTAF" title="UTAFの強み" />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {strengths.map((item) => (
              <article
                key={item.index}
                className="tech-card p-6"
              >
                <span aria-hidden="true" className="card-watermark">
                  {item.index}
                </span>
                <h3 className="mt-10 text-2xl font-black leading-snug text-[var(--color-ink)]">
                  {item.title}
                </h3>
                <p className="mt-4 leading-8 text-[var(--color-muted)]">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="activities"
        className="border-b border-black/10 bg-[var(--color-teal)] px-5 py-16 text-white md:px-8 md:py-24"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="font-mono text-xs font-black uppercase tracking-[0.18em] text-[var(--color-yellow)]">
              Activities
            </p>
            <h2 className="mt-4 max-w-xl text-4xl font-black leading-tight md:text-5xl">
              学び、組み立て、実際にロボットを動かす。
            </h2>
          </div>
          <div>
            <p className="max-w-3xl text-base leading-8 text-white/80">
              SO-101の組み立てから始め、MuJoCo勉強会、実機投入、最初の成果物公開まで進めます。活動レポートは、活動開始後に随時追加予定です。
            </p>
            <div className="mt-8 divide-y divide-white/20 border-y border-white/20">
              {activities.map(([date, body]) => (
                <div
                  key={date}
                  className="grid gap-3 py-5 md:grid-cols-[9rem_1fr] md:items-center"
                >
                  <p className="font-mono text-sm font-black text-[var(--color-yellow)]">
                    {date}
                  </p>
                  <p className="text-lg font-bold">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="grid-bg border-b border-black/10 px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Goals" title="目指すもの" />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {goals.map((goal, index) => (
              <article
                key={goal.title}
                className="tech-card min-h-56 p-6"
              >
                <span aria-hidden="true" className="card-watermark">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-10 text-2xl font-black leading-snug text-[var(--color-ink)]">
                  {goal.title}
                </h3>
                <p className="mt-4 leading-8 text-[var(--color-muted)]">
                  {goal.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="join"
        className="border-b border-black/10 bg-[var(--color-paper)] px-5 py-16 md:px-8 md:py-24"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className="font-mono text-xs font-black uppercase tracking-[0.18em] text-[var(--color-teal)]">
              Join
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight text-[var(--color-ink)] md:text-6xl">
              この夏、ロボットを動かす側へ！
            </h2>
          </div>
          <div className="tech-callout p-7">
            <p className="text-2xl font-black leading-relaxed text-[var(--color-ink)]">
              ほぼ全員が未経験。興味ある人はぜひ。技術力がある人も大歓迎。
            </p>
            <p className="mt-5 leading-8 text-[var(--color-ink)]">
              応募フォームは準備中です。入会希望・質問は、現在はメールで受け付けています。
            </p>
            <a
              href="mailto:info@utaf.dev?subject=UTAF%20%E5%85%A5%E4%BC%9A%E7%9B%B8%E8%AB%87"
              className="mt-8 inline-flex border-b-2 border-[var(--color-teal)] pb-1 text-sm font-black text-[var(--color-teal)]"
            >
              info@utaf.dev に連絡する
            </a>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="bg-[var(--color-ink)] px-5 py-14 text-white md:px-8"
      >
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_1fr] md:items-end">
          <div>
            <Image
              src="/images/utaf-logo.png"
              alt="UTAF logo"
              width={96}
              height={96}
              className="h-20 w-20 rounded-sm bg-white object-contain p-2"
            />
            <h2 className="mt-6 text-3xl font-black">
              University of Tokyo Autonomy Forge
            </h2>
            <p className="mt-3 max-w-xl leading-8 text-white/70">
              スポンサー・支援の相談も歓迎しています。企業・大学関係者の方はメールでお問い合わせください。
            </p>
          </div>
          <div className="md:text-right">
            <p className="font-mono text-xs font-black uppercase tracking-[0.18em] text-[var(--color-yellow)]">
              Contact
            </p>
            <a
              href="mailto:info@utaf.dev"
              className="mt-4 inline-block text-3xl font-black text-white underline decoration-[var(--color-yellow)] decoration-4 underline-offset-8"
            >
              info@utaf.dev
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function SectionTitle({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div>
      <p className="font-mono text-xs font-black uppercase tracking-[0.18em] text-[var(--color-teal)]">
        {eyebrow}
      </p>
      <h2 className="mt-4 max-w-2xl text-4xl font-black leading-tight text-[var(--color-ink)] md:text-5xl">
        {title}
      </h2>
    </div>
  );
}

function InfoBlock({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="tech-card px-6 py-7">
      <p className="font-mono text-xs font-black uppercase tracking-[0.16em] text-[var(--color-teal)]">
        {label}
      </p>
      <p className="mt-4 text-lg font-bold leading-8 text-[var(--color-ink)]">
        {children}
      </p>
    </div>
  );
}
