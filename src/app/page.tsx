import Image from "next/image";

const lineUrl = "https://lin.ee/r1t3IRO";

const navItems = [
  { href: "#physical-ai", label: "Physical AI" },
  { href: "#about", label: "About" },
  { href: "#activities", label: "Activities" },
  { href: "#contact", label: "Contact" },
];

const strengths = [
  {
    index: "01",
    title: "知識を持ち寄れる",
    body: "一人でできることには限界があります。自分の知らないことを仲間が知っていることも多く、集まって取り組むほうがずっと速く進みます。",
  },
  {
    index: "02",
    title: "一人では揃えられない環境を使える",
    body: "機材や工具は個人ではなかなか揃えられません。UTAFで用意して、みんなでシェアしながら使えます。",
  },
  {
    index: "03",
    title: "研究の最前線から助言をもらえる",
    body: "ロボット研究の最前線を走っていて顧問でもある河原塚先生に相談できます。",
  },
];

const projects = [
  ["洗濯物アーム", "ロボットアームで洗濯物をたたむ"],
  ["PuppyBot", "ペットのように人についてくる四脚ロボットをつくる"],
  ["自走式ごみ箱", "人のところまで自分で動いていくごみ箱をつくる"],
];

const skills = [
  { title: "主体性", body: "自分で課題を見つけ、決め、やり切る力" },
  { title: "ハードとソフトを横断する力", body: "認識・学習・制御 × 機構設計・製作・センサ統合" },
  { title: "チームでつくる力", body: "複雑なシステムを動かすためのプロジェクトマネジメントとチーム開発" },
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
                The University of Tokyo Autonomy Forge
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

      <section className="hero-section relative overflow-hidden border-b border-black/10 bg-[var(--color-paper)] md:min-h-[82svh]">
        <div className="hero-photo">
          <Image
            src="/images/hero-utaf-robotics.png"
            alt="Robotics workspace with a robot arm and simulation display"
            fill
            preload
            sizes="100vw"
            className="hero-image"
          />
        </div>
        <div className="hero-overlay" />
        <div className="relative mx-auto flex max-w-7xl items-center px-5 py-10 md:min-h-[82svh] md:px-8 md:py-16">
          <div className="max-w-2xl">
            <p className="mb-5 font-mono text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-teal)]">
              The University of Tokyo Autonomy Forge
            </p>
            <h1 className="text-[clamp(1.8rem,7.1vw,3rem)] font-black leading-[1.25] text-[var(--color-ink)] md:text-[clamp(2.75rem,4.3vw,3.5rem)]">
              フィジカルAIの人材を、
              <br />
              東大から世界へ。
            </h1>
            <p className="mt-7 max-w-2xl text-xl font-bold leading-relaxed text-[var(--color-teal)] md:text-2xl">
              フィジカルAIを学び、技術力を養う。
            </p>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--color-muted)]">
              UTAFは、東京大学フィジカルAI学生団体です。東大で学部前半からでも本気でロボットとAIに触れる場をつくり、未経験から実機を動かし、学びを公開し、自ら問いを立て、ロボットの身体も頭脳も自分の手でつくれるエンジニアを育てます。
            </p>
            <div className="mt-9 flex flex-wrap gap-x-8 gap-y-3 text-sm font-black text-[var(--color-ink)]">
              <a
                href={lineUrl}
                className="border-b-2 border-[var(--color-yellow)] pb-1 transition hover:text-[var(--color-teal)]"
              >
                公式LINEで参加する
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
              未経験OK。完全初学者中心。
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
        <div className="mx-auto max-w-7xl">
          <div>
            <p className="font-mono text-xs font-black uppercase tracking-[0.18em] text-[var(--color-yellow)]">
              Activities
            </p>
            <h2 className="mt-4 max-w-xl text-4xl font-black leading-tight md:text-5xl">
              学び、組み立て、実際にロボットを動かす。
            </h2>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_auto_1fr]">
            <article className="border border-white/25 p-6 md:p-8">
              <p className="font-mono text-sm font-black text-[var(--color-yellow)]">STEP 1</p>
              <h3 className="mt-4 text-2xl font-black">基礎カリキュラム<span className="mt-2 block text-base font-bold text-white/80">約半年</span></h3>
              <p className="mt-5 leading-8 text-white/90">河原塚先生監修のカリキュラムに沿って、実機から学びます。</p>
              <p className="mt-4 text-sm leading-7 text-white/80">内容の一例：ロボットアームの組み立て → モーター制御 → ロボットのモデル化 → 運動学 → シミュレーション …</p>
            </article>
            <span aria-hidden="true" className="self-center text-center text-4xl text-[var(--color-yellow)]"><span className="lg:hidden">↓</span><span className="hidden lg:inline">→</span></span>
            <article className="border border-white/25 p-6 md:p-8">
              <p className="font-mono text-sm font-black text-[var(--color-yellow)]">STEP 2</p>
              <h3 className="mt-4 text-2xl font-black">自由研究型プロジェクト</h3>
              <p className="mt-5 leading-8 text-white/90">「ロボットで何を実現したいか」を自分たちで決め、チームで形にします。既存のロボットで実現できなければ、ロボットの身体の設計・製作から挑戦します。</p>
              <h4 className="mt-7 font-black text-[var(--color-yellow)]">活動の一例</h4>
              <dl className="mt-4 space-y-4">
                {projects.map(([name, body]) => (
                  <div key={name}>
                    <dt className="font-black">{name}</dt>
                    <dd className="mt-1 text-sm leading-7 text-white/80">{body}</dd>
                  </div>
                ))}
              </dl>
            </article>
          </div>
          <div className="mt-8 border-l-4 border-[var(--color-yellow)] bg-white/5 px-6 py-5">
            <h3 className="text-xl font-black">毎週土曜 発表会</h3>
            <p className="mt-2 leading-8 text-white/90">進捗を共有し、互いにフィードバックし合います。</p>
          </div>
        </div>
      </section>

      <section id="skills" className="grid-bg border-b border-black/10 px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Skills" title="UTAFで身につく3つの力" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {skills.map((skill) => (
              <article key={skill.title} className="border-t-2 border-[var(--color-teal)] pt-6">
                <h3 className="text-2xl font-black leading-snug text-[var(--color-ink)]">{skill.title}</h3>
                <p className="mt-4 leading-8 text-[var(--color-muted)]">{skill.body}</p>
              </article>
            ))}
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

      <section id="message" className="border-b border-black/10 bg-[var(--color-cream)] px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <SectionTitle eyebrow="Message" title="代表メッセージ" />
          <div className="max-w-3xl space-y-6 text-base leading-8 text-[var(--color-muted)]">
            <p>高校生のころから、大学に入ったら心の底から面白いと思えることをやりたいと考えていました。けれど、東大の授業を受け、1年生のうちに6つの研究室を見学しても、なかなか見つかりませんでした。正直に言えば、東大に入ったときは、自分がロボットの道に進むとは思ってもいませんでした。</p>
            <p>転機は、Physical Intelligence社のロボットAI「π0（パイゼロ）」のデモ動画です。ロボットが洗濯機から洗濯物を取り出し、机まで運んで畳んでいく。その姿に、心の底から感動しました。</p>
            <p>これを自分でもやってみたい。でも東大には、学部生が気軽にAIロボットに触れられる場所がありませんでした。だから、UTAFを立ち上げました。私自身、ロボットもプログラミングも未経験からのスタートです。</p>
            <p>UTAFには、実機と、仲間と、研究の最前線にいる先生がいます。足りないのは「やってみたい」と思うあなただけです。</p>
            <p className="text-xl font-black text-[var(--color-ink)]">一緒に、ロボットを動かすところから始めましょう。</p>
            <p className="pt-2 font-bold text-[var(--color-ink)]">UTAF 代表 川嶋凌児</p>
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
            <h2 className="mt-4 text-balance text-4xl font-black leading-tight text-[var(--color-ink)] md:text-6xl">
              ロボットを動かす側へ！
            </h2>
          </div>
          <div className="tech-callout p-6 md:p-7">
            <p className="text-2xl font-black leading-relaxed text-[var(--color-ink)]">
              ほぼ全員が未経験。興味ある人はぜひ。技術力がある人も大歓迎。
            </p>
            <p className="mt-5 leading-8 text-[var(--color-ink)]">
              まずは公式LINEを友だち追加してください。
              <br />
              見学だけでも大歓迎です。毎週土曜の発表会の案内などをお送りします。
            </p>
            <a
              href={lineUrl}
              className="mt-8 inline-flex bg-[var(--color-teal)] px-6 py-4 text-sm font-black text-white transition hover:bg-[var(--color-ink)]"
            >
              公式LINEを友だち追加する
            </a>
            <div className="mt-8 flex flex-wrap items-center gap-5 border-t border-black/10 pt-6">
              <a href={lineUrl} aria-label="公式LINEを友だち追加するQRコード">
                <Image src="/images/utaf-line-qr.png" alt="UTAF公式LINEの友だち追加用QRコード" width={540} height={540} unoptimized className="h-40 w-40 bg-white" />
              </a>
              <p className="max-w-56 text-sm leading-7 text-[var(--color-muted)]">PCでご覧の方は、スマホでQRコードを読み取ってください。</p>
            </div>
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
              The University of Tokyo Autonomy Forge
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
