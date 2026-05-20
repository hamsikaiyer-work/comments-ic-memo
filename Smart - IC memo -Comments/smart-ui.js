const EXEC_SUMMARY = `<strong>Fundamental Company Profile and Leadership</strong>

<strong>Operational History:</strong> Founded in 2013 by Satish Kannan and Enbasekar D., Medibuddy has become India's largest digital platform for outpatient healthcare services. It operates as a technology-driven aggregator, connecting a fragmented ecosystem of patients, providers, and payors to create a seamless healthcare experience.

<strong>Leadership Team:</strong> The company is founder-led by IIT Madras alumni with deep expertise in healthcare and technology. They are supported by a seasoned senior management team with extensive experience from industry-leading companies such as Philips, Swiss Re, Amazon, Gojek, and JPMorgan, providing a robust blend of entrepreneurial agility and operational expertise.

<strong>Regulatory Landscape:</strong> Medibuddy operates within a dynamic regulatory environment governed by India's Telemedicine Practice Guidelines, the Digital Personal Data Protection (DPDP) Act, and evolving e-pharmacy rules. The company has proactively aligned itself with the government's digital health initiatives, including the Unified Health Interface (UHI) and the Ayushman Bharat Digital Mission (ABDM), positioning it as a key player in the nation's formalizing healthcare infrastructure. This proactive stance helps mitigate regulatory risk and creates opportunities for deeper integration.

<strong>Core Product, Customer, and Market Position</strong>

<strong>Core Offering:</strong> Medibuddy offers a comprehensive, on-demand, omnichannel platform for outpatient care. Its core services are productized into four key pillars: Consultations (online and in-clinic), Lab Tests, Medicines, and Surgery Care, effectively creating a one-stop-shop for users.

<strong>Target Customer and Go-to-Market:</strong> The company's primary go-to-market strategy is a B2B2C model, which generates over 80% of its recurring revenue. It targets corporates (400+ clients), insurance companies (partnered with 78% of the market), and NBFCs, acquiring end-users in bulk at a very low customer acquisition cost (CAC). A smaller B2C channel serves individual retail customers.

<strong>Resulting Market Position:</strong> Medibuddy is the definitive market leader in the digital outpatient space, with revenues approximately 1.5 times larger than its top peers combined. Its key advantage is its unparalleled network scale, which includes over 103,000 doctors and 15,000+ outpatient centers, enabling a true pan-India cashless service that is difficult for competitors to replicate.`;

const INVESTMENT_THESIS = `<strong>Financial Profile and Key Performance Indicators</strong>

<strong>Historical Growth and Profitability:</strong> Medibuddy has demonstrated impressive growth, achieving a 39% Net Revenue CAGR from FY23 to FY25. More critically, the company has shown a clear path to profitability, with its EBITDA margin improving dramatically from -37.4% in FY23 to -12.6% in FY25. This 2,500-basis point improvement in just two years proves the business's inherent operating leverage and the success of its pivot to a more sustainable, B2B2C-focused growth model.

<strong>Future Potential:</strong> The financial projections indicate continued strong performance, with Net Revenue forecasted to reach $515 million by FY30. The operating leverage is expected to drive the company to profitability, with the EBITDA margin projected to turn positive in FY27 and reach a healthy 12% ($59 million) by FY30.

<strong>Industry-Specific KPIs:</strong> The business exhibits strong unit economics, with a blended take rate of 22%. The high retention of its corporate client base underscores the stickiness of its revenue and the value of its B2B2C model.

<strong>Capitalization Journey and Key Stakeholders</strong>

<strong>Founders:</strong> The company continues to be led by its dedicated co-founders, Satish Kannan (CEO) and Enbasekar D. (CTO), who have guided the company's strategic direction since its inception in 2013.

<strong>Capital Raised:</strong> To date, Medibuddy has raised approximately $180 million from a syndicate of high-quality, marquee investors, including Bessemer Venture Partners, Quadria Capital, Lightrock, and Rebright Partners.

<strong>Key Partners:</strong> This strong investor base provides not only capital but also strategic guidance, a robust governance framework, and a valuable network to support the company's ambitious growth plans.

<strong>Proposed Investment and Expected Financial Outcome</strong>

<strong>Investment Ask:</strong> We are seeking approval for a primary investment of $5 million in exchange for an approximate 12% stake in the company. This is part of the company's Series B financing round at a pre-money valuation of $35 million.

<strong>Use of Proceeds:</strong> The capital will be used to accelerate market penetration in the corporate and insurance sectors, expand the provider network into new geographies, and further invest in the company's proprietary technology stack, particularly its AI and data analytics capabilities.

<strong>Expected Returns:</strong> We anticipate an exit in FY28–FY29, likely through an IPO or a strategic sale. Our base case financial model projects an exit valuation of approximately $500 million, which would generate a 4.5x MoIC and a 28% IRR for the fund.`;

const NAV_SECTIONS = [
  { label: 'Executive summary', mandatory: true },
  { label: 'Investment thesis', mandatory: true },
  { label: 'Key risks, mitigants\n& diligence areas', mandatory: true },
  { label: 'The business', mandatory: true },
  { label: 'Market opportunity', mandatory: true },
  { label: 'Benchmarking', mandatory: true },
  { label: 'Financial analysis', mandatory: true },
  { label: 'Valuation and\nreturns', mandatory: true },
  { label: 'Annexure 1', mandatory: true },
  { label: 'Annexure 2', mandatory: true },
];

const CONTENT_SECTIONS = [
  { id: 'exec', title: 'Executive summary', badge: 'Unvetted', date: 'Last updated: 23 Jul, 1:43 PM', body: EXEC_SUMMARY },
  { id: 'thesis', title: 'Investment thesis', badge: 'Unvetted', date: 'Last updated: 23 Jul, 1:43 PM', body: INVESTMENT_THESIS },
  { id: 'risks', title: 'Key risks, mitigants & diligence areas', badge: 'Unvetted', date: 'Last updated: 23 Jul, 1:43 PM', body: `<strong>Key Risks</strong>\n\n<strong>Regulatory Risk:</strong> The evolving telemedicine and e-pharmacy regulatory landscape in India poses a risk of sudden policy shifts that could curtail certain service lines. Mitigant: Medibuddy's proactive alignment with ABDM and UHI positions it as a preferred partner for the government's digital health agenda.\n\n<strong>Concentration Risk:</strong> Over 80% of revenue is derived from the B2B2C channel. A loss of a few large corporate or insurance clients could materially impact revenue. Mitigant: The company has 400+ corporate clients, limiting single-client dependency, and high renewal rates indicate strong stickiness.\n\n<strong>Competition Risk:</strong> Well-funded competitors such as Practo, Apollo 247, and Tata 1mg operate in adjacent segments. Mitigant: Medibuddy's network scale (103,000+ doctors, 15,000+ centres) and B2B2C moat are difficult to replicate quickly.\n\n<strong>Profitability Risk:</strong> The company remains EBITDA-negative at -12.6% in FY25. Mitigant: The trajectory of improvement (2,500 bps in two years) demonstrates operating leverage; breakeven is projected in FY27.` },
  { id: 'business', title: 'The business', badge: null, date: 'Last updated: 22 Jul, 10:15 AM', body: `<strong>Business Model</strong>\n\n<strong>Revenue Streams:</strong> Medibuddy generates revenue through three primary streams: (1) platform fees from corporate and insurance partners, (2) transaction-based commissions on consultations, lab tests, and medicines, and (3) SaaS fees for its proprietary healthcare management software.\n\n<strong>Unit Economics:</strong> The platform maintains a blended take rate of 22% across all service verticals. Customer acquisition cost (CAC) in the B2B2C channel is approximately 80% lower than direct-to-consumer models, driven by bulk onboarding through employer and insurer partnerships.\n\n<strong>Operations:</strong> The company operates an asset-light model, aggregating an existing network of healthcare providers rather than owning physical infrastructure. Its proprietary technology stack enables real-time appointment scheduling, cashless claims processing, and longitudinal health record management across its entire network.` },
  { id: 'market', title: 'Market opportunity', badge: null, date: 'Last updated: 22 Jul, 10:15 AM', body: `<strong>Total Addressable Market</strong>\n\n<strong>Indian Digital Health Market:</strong> The Indian digital health market is estimated at $7.5 billion in 2024 and is projected to reach $21 billion by FY30, representing a CAGR of approximately 18%. The outpatient segment, which is Medibuddy's core focus, accounts for approximately 60% of total healthcare spend in India.\n\n<strong>Corporate Health Benefits:</strong> India's organised employer base covers approximately 50 million employees. Corporate health benefit spending is growing at 22% annually, driven by post-pandemic awareness and regulatory requirements for employee wellness programmes.\n\n<strong>Insurance Penetration:</strong> Health insurance penetration in India stands at 37% and is expanding rapidly. As insurers digitalise their networks to manage claims costs, platforms like Medibuddy become critical infrastructure partners, creating a structural tailwind for the B2B2C model.` },
  { id: 'bench', title: 'Benchmarking', badge: null, date: 'Last updated: 21 Jul, 4:00 PM', body: `<strong>Competitive Benchmarking</strong>\n\n<strong>Revenue Scale:</strong> Medibuddy's net revenue is approximately 1.5x the combined revenue of its top two peers. This scale advantage translates to superior bargaining power with providers and insurers, lower unit costs, and a stronger data moat.\n\n<strong>Network Depth:</strong> With 103,000+ empanelled doctors and 15,000+ outpatient centres, Medibuddy's provider network is 3x larger than the next closest competitor. This enables genuine pan-India cashless coverage — a key requirement for large insurance and corporate clients.\n\n<strong>Growth vs. Efficiency:</strong> Medibuddy's revenue CAGR of 39% (FY23–FY25) compares favourably to the peer median of 24%, while its EBITDA margin improvement of 2,500 bps over the same period is the fastest in the cohort, indicating superior operational execution.` },
  { id: 'financial', title: 'Financial analysis', badge: null, date: 'Last updated: 21 Jul, 4:00 PM', body: `<strong>Historical Financials (INR Cr)</strong>\n\n<strong>Revenue:</strong> Net revenue grew from ₹180 Cr in FY23 to ₹348 Cr in FY25, a 39% CAGR. Gross profit margins expanded from 31% to 44% over the same period, reflecting the shift towards higher-margin digital consultations and SaaS revenue.\n\n<strong>EBITDA:</strong> EBITDA loss narrowed from -₹67 Cr (-37.4% margin) in FY23 to -₹44 Cr (-12.6% margin) in FY25. The improvement is driven by operating leverage on the fixed technology and corporate cost base, partially offset by continued investment in provider network expansion.\n\n<strong>Cash Position:</strong> The company holds ₹210 Cr in cash and equivalents as of March 2025, providing approximately 18 months of runway at the current burn rate. The proposed $5M investment extends runway to approximately 24 months and funds the growth initiatives outlined in the use of proceeds.` },
  { id: 'valuation', title: 'Valuation and returns', badge: null, date: 'Last updated: 20 Jul, 2:30 PM', body: `<strong>Valuation Framework</strong>\n\n<strong>Entry Valuation:</strong> The proposed investment is at a pre-money valuation of $35 million, implying an EV/Revenue multiple of approximately 2.8x on FY25 net revenue. This represents a significant discount to the peer median of 4.5x, reflecting the company's current EBITDA-negative status.\n\n<strong>Exit Assumptions:</strong> Our base case assumes an exit in FY28–FY29 via IPO or strategic sale at an EV/Revenue multiple of 5–6x on projected FY29 net revenue of ~$110 million, implying an exit valuation of $550–660 million.\n\n<strong>Return Profile:</strong> At the base case exit valuation of $500 million, the $5M investment generates a 4.5x MoIC and 28% IRR. The bull case (IPO at 7x revenue) yields 6.2x MoIC and 38% IRR. The bear case (strategic sale at 3.5x FY28 revenue) still returns 2.1x MoIC and 16% IRR, above our fund hurdle rate.` },
  { id: 'annex1', title: 'Annexure 1', badge: null, date: 'Last updated: 19 Jul, 11:00 AM', body: `<strong>Annexure 1 — Management Profiles</strong>\n\n<strong>Satish Kannan — Co-founder & CEO:</strong> IIT Madras graduate with 12+ years in healthcare technology. Prior to Medibuddy, held product leadership roles at a leading healthcare analytics firm. Has led the company through four funding rounds and its pivot to the B2B2C model.\n\n<strong>Enbasekar D. — Co-founder & CTO:</strong> IIT Madras graduate with deep expertise in distributed systems and machine learning. Architected Medibuddy's proprietary claims processing engine, which processes over 2 million transactions monthly with 99.95% uptime.\n\n<strong>CFO — Priya Mehta:</strong> Former VP Finance at a listed healthcare services company. Led the implementation of Ind AS accounting standards and manages relationships with the company's banking syndicate. Joined Medibuddy in 2022 ahead of the planned IPO process.` },
  { id: 'annex2', title: 'Annexure 2', badge: null, date: 'Last updated: 19 Jul, 11:00 AM', body: `<strong>Annexure 2 — Financial Model Assumptions</strong>\n\n<strong>Revenue Assumptions:</strong> Net revenue is projected to grow at a 35% CAGR from FY25 to FY30, driven by: (1) expansion of the corporate client base from 400 to 900 clients, (2) increase in average revenue per user (ARPU) from ₹1,200 to ₹2,100 as higher-value services are adopted, and (3) geographic expansion into Tier 2 and Tier 3 cities.\n\n<strong>Margin Assumptions:</strong> Gross margin is expected to improve from 44% in FY25 to 58% in FY30 as the revenue mix shifts towards higher-margin SaaS and digital consultation products. EBITDA is projected to turn positive in FY27 at 3% margin and reach 12% by FY30.\n\n<strong>Capex Assumptions:</strong> Annual technology capex is assumed at 6% of revenue, reflecting continued investment in the AI-driven triage and recommendation engine. No significant physical infrastructure capex is anticipated given the asset-light model.` },
];


const RESOLVED_COMMENTS = [
  { id: 55, author: 'Raunak J', initials: 'RJ', avatarBg: '#dbeafe', avatarColor: '#1e3a8a', section: 'Executive summary', date: "5 Jul '25", replies: 2, unread: false, resolved: true, text: 'Confirmed — the 1.5x revenue claim has been verified against FY25 audited financials...' },
  { id: 54, author: 'Priyanka S', initials: 'PS', avatarBg: '#e0f8e7', avatarColor: '#205b34', section: 'Investment thesis', date: "4 Jul '25", replies: 1, unread: false, resolved: true, text: 'IRR footnote has been added with the discount rate assumption of 12% WACC...' },
  { id: 53, author: 'Aman G', initials: 'AG', avatarBg: '#fde68a', avatarColor: '#78350f', section: 'Financial analysis', date: "3 Jul '25", replies: 0, unread: false, resolved: true, text: 'FY27 EBITDA breakeven assumption updated — driven by 30% headcount freeze and revenue acceleration...' },
];

const COMMENTS = [
  // Executive summary — 10 comments
  {
    id: 50, author: 'Priyanka S', initials: 'PS', avatarBg: '#e0f8e7', avatarColor: '#205b34',
    section: 'Executive summary', date: "10 Jul '25", replies: 6, unread: true,
    text: 'The B2B2C model description is strong but we should clarify the distinction from a pure SaaS play for the IC audience...',
  },
  {
    id: 49, author: 'Raunak J', initials: 'RJ', avatarBg: '#dbeafe', avatarColor: '#1e3a8a',
    section: 'Executive summary', date: "10 Jul '25", replies: 3, unread: true,
    text: 'Leadership team section — should we add a note on key person risk given both founders are still operationally involved...',
  },
  {
    id: 48, author: 'Aman G', initials: 'AG', avatarBg: '#fde68a', avatarColor: '#78350f',
    section: 'Executive summary', date: "9 Jul '25", replies: 0, unread: false,
    text: 'ABDM alignment paragraph is well written. Suggest linking to the specific circular from the health ministry for IC reference...',
  },
  {
    id: 47, author: 'Priyanka S', initials: 'PS', avatarBg: '#e0f8e7', avatarColor: '#205b34',
    section: 'Executive summary', date: "9 Jul '25", replies: 2, unread: false,
    text: 'The 103,000 doctor network figure — is this active or registered? There is usually a significant drop-off in active utilisation...',
  },
  {
    id: 46, author: 'Raunak J', initials: 'RJ', avatarBg: '#dbeafe', avatarColor: '#1e3a8a',
    section: 'Executive summary', date: "8 Jul '25", replies: 1, unread: false,
    text: 'Suggest reordering — lead with market position before operational history. IC tends to anchor on the competitive moat first...',
  },
  {
    id: 45, author: 'Aman G', initials: 'AG', avatarBg: '#fde68a', avatarColor: '#78350f',
    section: 'Executive summary', date: "8 Jul '25", replies: 4, unread: false,
    text: 'The 1.5x revenue vs peers claim needs a footnote — which peers and which fiscal year are we benchmarking against...',
  },
  {
    id: 44, author: 'Priyanka S', initials: 'PS', avatarBg: '#e0f8e7', avatarColor: '#205b34',
    section: 'Executive summary', date: "7 Jul '25", replies: 0, unread: false,
    text: 'Telemedicine guidelines reference should be updated to the 2022 amendment, the 2020 version is cited currently...',
  },
  {
    id: 43, author: 'Raunak J', initials: 'RJ', avatarBg: '#dbeafe', avatarColor: '#1e3a8a',
    section: 'Executive summary', date: "7 Jul '25", replies: 2, unread: false,
    text: 'Good summary of the four service pillars. Should we add GMV breakdown per pillar to give IC a sense of revenue mix...',
  },
  {
    id: 42, author: 'Aman G', initials: 'AG', avatarBg: '#fde68a', avatarColor: '#78350f',
    section: 'Executive summary', date: "6 Jul '25", replies: 1, unread: false,
    text: 'Founder background paragraph is solid. Consider adding a line on why they pivoted from B2C to B2B2C — the decision context matters...',
  },
  {
    id: 41, author: 'Priyanka S', initials: 'PS', avatarBg: '#e0f8e7', avatarColor: '#205b34',
    section: 'Executive summary', date: "6 Jul '25", replies: 0, unread: false,
    text: 'Pan-India cashless coverage is a strong differentiator. Worth quantifying — what % of pin codes does the network cover currently...',
  },
  // Investment thesis — 3 comments
  {
    id: 40, author: 'Aman G', initials: 'AG', avatarBg: '#fde68a', avatarColor: '#78350f',
    section: 'Investment thesis', date: "9 Jul '25", replies: 2, unread: true,
    text: 'The 4.5x MoIC projection seems optimistic given current market multiples. Should we stress-test the bear case further before IC...',
  },
  {
    id: 39, author: 'Raunak J', initials: 'RJ', avatarBg: '#dbeafe', avatarColor: '#1e3a8a',
    section: 'Investment thesis', date: "8 Jul '25", replies: 1, unread: false,
    text: 'IRR of 28% — what discount rate assumption underlies this? Should be explicit for the IC committee review...',
  },
  {
    id: 38, author: 'Priyanka S', initials: 'PS', avatarBg: '#e0f8e7', avatarColor: '#205b34',
    section: 'Investment thesis', date: "7 Jul '25", replies: 0, unread: false,
    text: 'Series B at $35M pre-money — is there a lead investor already committed or are we anchoring the round...',
  },
  // Financial analysis — 3 comments
  {
    id: 37, author: 'Raunak J', initials: 'RJ', avatarBg: '#dbeafe', avatarColor: '#1e3a8a',
    section: 'Financial analysis', date: "9 Jul '25", replies: 0, unread: false,
    text: 'EBITDA margin improvement of 2,500 bps is impressive but the base was quite low. Worth flagging the absolute loss quantum...',
  },
  {
    id: 36, author: 'Aman G', initials: 'AG', avatarBg: '#fde68a', avatarColor: '#78350f',
    section: 'Financial analysis', date: "8 Jul '25", replies: 3, unread: false,
    text: 'FY27 EBITDA breakeven — what are the key assumptions driving this? Headcount freeze or revenue acceleration...',
  },
  {
    id: 35, author: 'Priyanka S', initials: 'PS', avatarBg: '#e0f8e7', avatarColor: '#205b34',
    section: 'Financial analysis', date: "7 Jul '25", replies: 1, unread: false,
    text: 'Cash runway of 18 months pre-investment — should flag this as a near-term risk in the key risks section too...',
  },
  // Valuation and returns — 3 comments
  {
    id: 34, author: 'Raunak J', initials: 'RJ', avatarBg: '#dbeafe', avatarColor: '#1e3a8a',
    section: 'Valuation and returns', date: "7 Jul '25", replies: 4, unread: true,
    text: 'Exit multiple of 5-6x on FY29 revenue — comparable listed peers are trading at 3.2x currently. Need to justify the premium...',
  },
  {
    id: 33, author: 'Aman G', initials: 'AG', avatarBg: '#fde68a', avatarColor: '#78350f',
    section: 'Valuation and returns', date: "6 Jul '25", replies: 0, unread: false,
    text: 'Bear case still returns 2.1x — suggest adding a downside scenario where revenue growth stalls at 20% CAGR post FY27...',
  },
  {
    id: 32, author: 'Priyanka S', initials: 'PS', avatarBg: '#e0f8e7', avatarColor: '#205b34',
    section: 'Valuation and returns', date: "5 Jul '25", replies: 2, unread: false,
    text: 'IPO vs strategic sale — given the Indian listed healthtech market, IPO seems more realistic. Should we weight it higher in base case...',
  },
  // Key risks, mitigants & diligence areas — 2 comments
  {
    id: 31, author: 'Priyanka S', initials: 'PS', avatarBg: '#e0f8e7', avatarColor: '#205b34',
    section: 'Key risks, mitigants & diligence areas', date: "8 Jul '25", replies: 3, unread: false,
    text: 'Regulatory risk section needs more depth — specifically around e-pharmacy rules which are still in draft stage...',
  },
  {
    id: 30, author: 'Raunak J', initials: 'RJ', avatarBg: '#dbeafe', avatarColor: '#1e3a8a',
    section: 'Key risks, mitigants & diligence areas', date: "7 Jul '25", replies: 1, unread: false,
    text: 'Concentration risk mitigant is reasonable but 400 clients with top 10 likely contributing 60%+ of revenue needs more diligence...',
  },
  // The business — 2 comments
  {
    id: 29, author: 'Aman G', initials: 'AG', avatarBg: '#fde68a', avatarColor: '#78350f',
    section: 'The business', date: "8 Jul '25", replies: 2, unread: false,
    text: 'Asset-light model description is clear. Should we add a section on the technology stack — proprietary vs third party components...',
  },
  {
    id: 28, author: 'Priyanka S', initials: 'PS', avatarBg: '#e0f8e7', avatarColor: '#205b34',
    section: 'The business', date: "7 Jul '25", replies: 0, unread: false,
    text: 'The 22% blended take rate — how does this compare to global peers like Teladoc or Ping An Good Doctor...',
  },
  // Market opportunity — 2 comments
  {
    id: 27, author: 'Aman G', initials: 'AG', avatarBg: '#fde68a', avatarColor: '#78350f',
    section: 'Market opportunity', date: "7 Jul '25", replies: 1, unread: false,
    text: 'The $21B TAM by FY30 — is this net revenue or GMV? The source cited uses GMV which makes the take rate math quite different...',
  },
  {
    id: 26, author: 'Raunak J', initials: 'RJ', avatarBg: '#dbeafe', avatarColor: '#1e3a8a',
    section: 'Market opportunity', date: "6 Jul '25", replies: 0, unread: false,
    text: 'Corporate health benefit spend growing at 22% — need primary source for this, the report cited is from 2022...',
  },
  // Benchmarking — 2 comments
  {
    id: 25, author: 'Aman G', initials: 'AG', avatarBg: '#fde68a', avatarColor: '#78350f',
    section: 'Benchmarking', date: "6 Jul '25", replies: 2, unread: false,
    text: 'Peer comparison methodology needs to be clearer — are we comparing on GMV or net revenue? The delta is significant...',
  },
  {
    id: 24, author: 'Priyanka S', initials: 'PS', avatarBg: '#e0f8e7', avatarColor: '#205b34',
    section: 'Benchmarking', date: "5 Jul '25", replies: 1, unread: false,
    text: 'Provider network 3x larger than next competitor — should we name the competitors explicitly for IC or keep it generic...',
  },
  // Annexure 1 — 2 comments
  {
    id: 23, author: 'Raunak J', initials: 'RJ', avatarBg: '#dbeafe', avatarColor: '#1e3a8a',
    section: 'Annexure 1', date: "5 Jul '25", replies: 1, unread: false,
    text: 'CFO joined in 2022 — relatively recent. Should we add a note on her previous exit experience and IPO readiness credentials...',
  },
  {
    id: 22, author: 'Aman G', initials: 'AG', avatarBg: '#fde68a', avatarColor: '#78350f',
    section: 'Annexure 1', date: "4 Jul '25", replies: 0, unread: false,
    text: 'CTO profile is strong. Consider adding team size under him — engineering headcount signals scale of the technology org...',
  },
  // Annexure 2 — 2 comments
  {
    id: 21, author: 'Priyanka S', initials: 'PS', avatarBg: '#e0f8e7', avatarColor: '#205b34',
    section: 'Annexure 2', date: "4 Jul '25", replies: 2, unread: false,
    text: 'Revenue CAGR assumption of 35% through FY30 — is this top-down or bottom-up? Would be good to show the build...',
  },
  {
    id: 20, author: 'Raunak J', initials: 'RJ', avatarBg: '#dbeafe', avatarColor: '#1e3a8a',
    section: 'Annexure 2', date: "3 Jul '25", replies: 0, unread: false,
    text: 'Capex at 6% of revenue seems low for an AI-driven platform. Should benchmark against similar tech-enabled healthcare cos...',
  },
  // IC note (General) — deal-level comments
  {
    id: 60, author: 'Raunak J', initials: 'RJ', avatarBg: '#dbeafe', avatarColor: '#1e3a8a',
    section: 'IC note (General)', date: "10 Jul '25", replies: 6, unread: false,
    text: 'YoY growth in Reinsurance ceded declined by 7% compared to last year. This was mainly drive...',
  },
  {
    id: 59, author: 'Priyanka S', initials: 'PS', avatarBg: '#e0f8e7', avatarColor: '#205b34',
    section: 'IC note (General)', date: "9 Jul '25", replies: 2, unread: true,
    text: 'Overall the note reads well. My main concern is the lack of primary data points — most numbers cite secondary research...',
  },
  {
    id: 58, author: 'Aman G', initials: 'AG', avatarBg: '#fde68a', avatarColor: '#78350f',
    section: 'IC note (General)', date: "8 Jul '25", replies: 1, unread: false,
    text: 'Should we add a one-pager exec summary at the top before the IC session? The note is quite detailed for a first read...',
  },
];

// Sort comments newest first
const MONTHS = { Jan:0, Feb:1, Mar:2, Apr:3, May:4, Jun:5, Jul:6, Aug:7, Sep:8, Oct:9, Nov:10, Dec:11 };
function parseCommentDate(d) {
  if (!d) return 0;
  const [day, mon, yr] = d.replace("'", '20').split(' ');
  return new Date(+yr, MONTHS[mon], +day).getTime();
}
COMMENTS.sort((a, b) => parseCommentDate(b.date) - parseCommentDate(a.date));
RESOLVED_COMMENTS.sort((a, b) => parseCommentDate(b.date) - parseCommentDate(a.date));

const KEBAB_ICON = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 13.8461C8.725 13.8461 8.48961 13.7482 8.29383 13.5523C8.09794 13.3565 8 13.1211 8 12.8461C8 12.5711 8.09794 12.3357 8.29383 12.1398C8.48961 11.944 8.725 11.8461 9 11.8461C9.275 11.8461 9.51039 11.944 9.70617 12.1398C9.90206 12.3357 10 12.5711 10 12.8461C10 13.1211 9.90206 13.3565 9.70617 13.5523C9.51039 13.7482 9.275 13.8461 9 13.8461ZM9 9.99998C8.725 9.99998 8.48961 9.90203 8.29383 9.70614C8.09794 9.51036 8 9.27498 8 8.99998C8 8.72498 8.09794 8.48959 8.29383 8.29381C8.48961 8.09792 8.725 7.99998 9 7.99998C9.275 7.99998 9.51039 8.09792 9.70617 8.29381C9.90206 8.48959 10 8.72498 10 8.99998C10 9.27498 9.90206 9.51036 9.70617 9.70614C9.51039 9.90203 9.275 9.99998 9 9.99998ZM9 6.15381C8.725 6.15381 8.48961 6.05592 8.29383 5.86014C8.09794 5.66425 8 5.42881 8 5.15381C8 4.87881 8.09794 4.64342 8.29383 4.44764C8.48961 4.25175 8.725 4.15381 9 4.15381C9.275 4.15381 9.51039 4.25175 9.70617 4.44764C9.90206 4.64342 10 4.87881 10 5.15381C10 5.42881 9.90206 5.66425 9.70617 5.86014C9.51039 6.05592 9.275 6.15381 9 6.15381Z" fill="#7C8594"/></svg>`;

const RESOLVED_ICON = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="18" height="18" rx="4" fill="#F2FBF5"/><path d="M11.2467 6.17264C11.014 5.93725 10.6347 5.93428 10.3982 6.16603L5.96322 10.5493L4.03528 8.55341C3.80534 8.31375 3.42466 8.30588 3.18502 8.53583C2.94536 8.76577 2.9375 9.14645 3.16744 9.38609C3.16848 9.38716 3.1695 9.38822 3.17054 9.38929L5.52125 11.8254C5.63375 11.9402 5.78751 12.0051 5.94822 12.0058H5.95483C6.1125 12.0053 6.26368 11.9429 6.37578 11.832L11.2413 7.02116C11.4764 6.78803 11.4788 6.40876 11.2467 6.17264Z" fill="#205B34"/><path d="M9.12942 11.8254C9.24163 11.9399 9.3949 12.0048 9.55519 12.0058H9.56181C9.71947 12.0053 9.87065 11.9429 9.98276 11.832L14.8483 7.0212C15.0689 6.77286 15.0463 6.39278 14.798 6.17224C14.5729 5.9723 14.2346 5.96967 14.0064 6.16607L9.57322 10.5493L9.41506 10.3852C9.18514 10.1455 8.80446 10.1376 8.5648 10.3676C8.32514 10.5975 8.31724 10.9782 8.54719 11.2178C8.54823 11.2189 8.54927 11.22 8.55031 11.2211L9.12942 11.8254Z" fill="#205B34"/></svg>`;

const RESOLVE_ICON = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.5276 5.81928C11.2657 5.55447 10.839 5.55113 10.573 5.81184L5.58362 10.743L3.41469 8.49765C3.156 8.22803 2.72774 8.21918 2.45815 8.47787C2.18853 8.73656 2.17968 9.16482 2.43837 9.43441C2.43954 9.43561 2.44069 9.43681 2.44186 9.43802L5.08641 12.1786C5.21297 12.3077 5.38594 12.3808 5.56674 12.3816H5.57419C5.75156 12.381 5.92163 12.3108 6.04775 12.1861L11.5215 6.77386C11.786 6.5116 11.7886 6.08492 11.5276 5.81928Z" fill="#7C8594"/>
<path d="M9.14562 12.1786C9.27185 12.3074 9.44427 12.3804 9.6246 12.3816H9.63205C9.80942 12.381 9.9795 12.3108 10.1056 12.186L15.5794 6.77385C15.8275 6.49447 15.8021 6.06688 15.5228 5.81877C15.2695 5.59384 14.889 5.59088 14.6322 5.81182L9.64488 10.743L9.46695 10.5583C9.20829 10.2887 8.78003 10.2798 8.51041 10.5385C8.24079 10.7972 8.23191 11.2254 8.4906 11.4951C8.49177 11.4963 8.49295 11.4975 8.49412 11.4987L9.14562 12.1786Z" fill="#7C8594"/>
</svg>`;

const COMMENT_ICON_PATH = `<path d="M12.6875 18.3125H18.3125V17.1875H12.6875V18.3125ZM12.6875 16.0625H21.3125V14.9375H12.6875V16.0625ZM12.6875 13.8125H21.3125V12.6875H12.6875V13.8125ZM9.875 23.7789V11.2308C9.875 10.8519 10.0063 10.5313 10.2688 10.2688C10.5313 10.0063 10.8519 9.875 11.2308 9.875H22.7692C23.1481 9.875 23.4688 10.0063 23.7313 10.2688C23.9938 10.5313 24.125 10.8519 24.125 11.2308V19.7692C24.125 20.1481 23.9938 20.4688 23.7313 20.7313C23.4688 20.9938 23.1481 21.125 22.7692 21.125H12.5289L9.875 23.7789ZM12.05 20H22.7692C22.8269 20 22.8798 19.9759 22.9278 19.9278C22.9759 19.8798 23 19.8269 23 19.7692V11.2308C23 11.1731 22.9759 11.1202 22.9278 11.0722C22.8798 11.0241 22.8269 11 22.7692 11H11.2308C11.1731 11 11.1202 11.0241 11.0722 11.0722C11.0241 11.1202 11 11.1731 11 11.2308V21.0386L12.05 20Z"`;
const DOT_PATH = `<path d="M23.5 7.5C24.3247 7.5 25.042 7.79505 25.623 8.37598C26.2043 8.95708 26.5 9.67504 26.5 10.5C26.5 11.3249 26.2052 12.0428 25.624 12.624C25.0429 13.2051 24.3249 13.5 23.5 13.5C22.6751 13.5 21.9571 13.2051 21.376 12.624C20.7948 12.0428 20.5 11.3249 20.5 10.5C20.5 9.67504 20.7957 8.95708 21.377 8.37598C21.958 7.79505 22.6753 7.5 23.5 7.5Z" fill="#205B34"`;

function commentIconSvg(active, hasNew) {
  const bg = active
    ? `<path d="M0 4C0 1.79086 1.79086 0 4 0H30C32.2091 0 34 1.79086 34 4V30C34 32.2091 32.2091 34 30 34H4C1.79086 34 0 32.2091 0 30V4Z" fill="#E0F8E7"/>`
    : `<rect width="34" height="34" rx="4" fill="#F5F7FA"/>`;
  const iconColor = active ? '#205B34' : '#525866';
  const dotStroke = active ? '#E0F8E7' : '#F5F7FA';
  const dot = hasNew ? `${DOT_PATH} stroke="${dotStroke}"/>` : '';
  const clip = hasNew ? `<g clip-path="url(#cc)">` : '';
  const clipClose = hasNew ? `</g><defs><clipPath id="cc"><rect width="18" height="18" fill="white" transform="translate(8 8)"/></clipPath></defs>` : '';
  return `<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">${bg}${clip}${COMMENT_ICON_PATH} fill="${iconColor}"/>${dot}${clipClose}</svg>`;
}

const AVATAR_IMAGES = {
  'RJ': 'https://i.pravatar.cc/40?img=12',
  'PS': 'https://i.pravatar.cc/40?img=47',
  'AG': 'https://i.pravatar.cc/40?img=33',
};

function avatar(initials, bg, color, size = 28) {
  const img = AVATAR_IMAGES[initials];
  if (img) {
    return `<img src="${img}" class="sui-avatar" style="width:${size}px;height:${size}px;object-fit:cover;" alt="${initials}">`;
  }
  return `<div class="sui-avatar" style="width:${size}px;height:${size}px;background:${bg};color:${color};font-size:${Math.round(size * 0.4)}px">${initials}</div>`;
}

function topNav() {
  return `
  <header class="sui-topnav">
    <svg width="100%" height="60" viewBox="0 0 1280 60" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="1280" height="60" fill="url(#paint0_linear_5532_7820)"/>
<path d="M25.1709 42H20.0201V18H25.1709V42ZM31.4411 30.5809V18H26.2904V30.5809H31.4411ZM37.7096 26.4013V18H32.5588V26.4013H37.7096Z" fill="#082E15"/>
<path d="M38.8291 22.2235V18H43.9798V22.2235H38.8291ZM32.5607 27.6015V42H37.7114V27.6015H32.5607ZM26.2904 31.7792V42H31.4411V31.7792H26.2904ZM38.8291 23.4219V42H43.9798V23.4219H38.8291Z" fill="#C0A362"/>
<path d="M56.3417 35C55.4018 35 54.5527 34.8318 53.7944 34.4954C53.036 34.1488 52.4379 33.6646 52 33.0428L53.1695 31.6514C53.4793 32.212 53.9172 32.6504 54.4833 32.9664C55.0494 33.2824 55.6689 33.4404 56.3417 33.4404C56.9612 33.4404 57.4472 33.3282 57.7997 33.104C58.1628 32.8695 58.3444 32.5535 58.3444 32.156C58.3444 31.8705 58.2483 31.6463 58.056 31.4832C57.8638 31.3099 57.5166 31.1621 57.0146 31.0398L54.9799 30.5963C54.1468 30.4128 53.5167 30.1019 53.0894 29.6636C52.6729 29.2151 52.4646 28.6391 52.4646 27.9358C52.4646 27.0591 52.7957 26.3507 53.4579 25.8104C54.1201 25.2701 54.9853 25 56.0534 25C56.8758 25 57.6234 25.158 58.2963 25.474C58.9692 25.79 59.5193 26.2436 59.9465 26.8349L58.6969 28.0887C58.4298 27.5994 58.0667 27.2222 57.6074 26.9572C57.1588 26.6922 56.6408 26.5596 56.0534 26.5596C55.53 26.5596 55.1135 26.6718 54.8037 26.896C54.494 27.1203 54.3391 27.4261 54.3391 27.8135C54.3391 28.0887 54.4299 28.3078 54.6115 28.4709C54.793 28.634 55.1295 28.7717 55.6208 28.8838L57.4953 29.3119C58.4459 29.526 59.1401 29.8573 59.578 30.3058C60.0159 30.7441 60.2349 31.3354 60.2349 32.0795C60.2349 32.9664 59.8717 33.6748 59.1455 34.2049C58.4298 34.735 57.4953 35 56.3417 35Z" fill="white"/>
<path d="M68.1375 26.9572L66.6475 32.0948H65.542L64.1001 26.9572H63.9399V34.8165H62.1135V25.1835H64.8371L66.1028 29.7859H66.247L67.4325 25.1835H70.1241V34.8165H68.2977V26.9572H68.1375Z" fill="white"/>
<path d="M75.9279 27.263H75.8638L74.6943 30.9633H77.1135L75.9279 27.263ZM80.4299 34.8165H78.3471L77.5941 32.4465H74.2136L73.4606 34.8165H71.49L74.7263 25.1835H77.1936L80.4299 34.8165Z" fill="white"/>
<path d="M85.8331 26.7431H83.8305V29.4343H85.7691C86.4847 29.4343 87.0187 29.3221 87.3712 29.0979C87.7343 28.8736 87.9159 28.5372 87.9159 28.0887C87.9159 27.6402 87.7397 27.3038 87.3872 27.0795C87.0454 26.8552 86.5274 26.7431 85.8331 26.7431ZM90.3511 34.7095V34.8165H87.996C87.8678 34.7044 87.7557 34.4903 87.6595 34.1743C87.5741 33.8583 87.51 33.4404 87.4673 32.9205C87.4032 32.2171 87.227 31.7074 86.9386 31.3914C86.6609 31.0754 86.239 30.9174 85.6729 30.9174H83.8305V34.8165H81.8439V25.1835H86.1055C87.3231 25.1835 88.2577 25.423 88.9092 25.9021C89.5714 26.3812 89.9025 27.0642 89.9025 27.9511C89.9025 28.5525 89.6515 29.0673 89.1495 29.4954C88.6475 29.9235 88.0334 30.158 87.3071 30.1988C87.8411 30.2905 88.2844 30.525 88.6368 30.9021C88.9893 31.2793 89.2189 31.7635 89.3258 32.3547C89.4432 33.0275 89.5768 33.5423 89.7263 33.8991C89.8865 34.2559 90.0948 34.526 90.3511 34.7095Z" fill="white"/>
<path d="M96.6195 26.8654V34.8165H94.6169V26.8654H91.2845V25.1835H100V26.8654H96.6195Z" fill="white"/>
<path d="M1099 38.0765C1098.58 38.0765 1098.23 37.9291 1097.94 37.6341C1097.64 37.3391 1097.49 36.9844 1097.49 36.5701H1100.51C1100.51 36.9858 1100.36 37.3408 1100.06 37.6351C1099.77 37.9294 1099.41 38.0765 1099 38.0765ZM1092.75 35.7368V34.487H1094.26V28.2688C1094.26 27.1481 1094.6 26.1572 1095.29 25.2961C1095.99 24.435 1096.87 23.8843 1097.96 23.6438V23.1247C1097.96 22.8354 1098.06 22.5894 1098.26 22.3868C1098.46 22.1843 1098.71 22.083 1099 22.083C1099.29 22.083 1099.53 22.1843 1099.74 22.3868C1099.94 22.5894 1100.04 22.8354 1100.04 23.1247V23.2913C1099.9 23.5381 1099.8 23.7892 1099.72 24.0445C1099.64 24.2999 1099.59 24.5649 1099.57 24.8395C1099.47 24.8224 1099.38 24.8074 1099.29 24.7945C1099.2 24.7817 1099.1 24.7753 1099 24.7753C1098.04 24.7753 1097.21 25.1164 1096.53 25.7986C1095.85 26.4807 1095.51 27.3041 1095.51 28.2688V34.487H1102.49V29.277C1102.68 29.3453 1102.89 29.3987 1103.1 29.4372C1103.31 29.4756 1103.53 29.4922 1103.74 29.487V34.487H1105.25V35.7368H1092.75ZM1103.57 27.668C1102.93 27.668 1102.39 27.4453 1101.94 26.9999C1101.5 26.5545 1101.28 26.0136 1101.28 25.3772C1101.28 24.7409 1101.5 24.1997 1101.94 23.7536C1102.39 23.3077 1102.93 23.0847 1103.57 23.0847C1104.2 23.0847 1104.74 23.3074 1105.19 23.7528C1105.64 24.1982 1105.86 24.7391 1105.86 25.3753C1105.86 26.0117 1105.64 26.5529 1105.19 26.9988C1104.75 27.445 1104.2 27.668 1103.57 27.668Z" fill="white"/>
<path d="M1134.99 34.679C1135.23 34.679 1135.43 34.597 1135.59 34.4328C1135.76 34.2685 1135.84 34.0673 1135.84 33.8293C1135.84 33.5913 1135.76 33.3904 1135.59 33.2263C1135.43 33.0625 1135.23 32.9805 1134.99 32.9805C1134.75 32.9805 1134.55 33.0627 1134.39 33.227C1134.22 33.3913 1134.14 33.5924 1134.14 33.8303C1134.14 34.0682 1134.22 34.2692 1134.39 34.4332C1134.55 34.5971 1134.75 34.679 1134.99 34.679ZM1134.4 31.6951H1135.57C1135.58 31.285 1135.64 30.9572 1135.75 30.712C1135.86 30.4668 1136.13 30.1418 1136.55 29.737C1136.92 29.3704 1137.2 29.032 1137.39 28.7215C1137.59 28.4113 1137.69 28.0448 1137.69 27.6222C1137.69 26.9048 1137.43 26.3445 1136.91 25.9411C1136.4 25.5379 1135.79 25.3363 1135.08 25.3363C1134.39 25.3363 1133.81 25.522 1133.36 25.8932C1132.9 26.2645 1132.58 26.7017 1132.38 27.2049L1133.45 27.6343C1133.55 27.3576 1133.73 27.0881 1133.97 26.8257C1134.22 26.5635 1134.58 26.4324 1135.07 26.4324C1135.56 26.4324 1135.92 26.5672 1136.16 26.837C1136.4 27.1068 1136.51 27.4036 1136.51 27.7272C1136.51 28.0104 1136.43 28.2695 1136.27 28.5045C1136.11 28.7395 1135.9 28.9665 1135.65 29.1855C1135.11 29.6791 1134.76 30.0729 1134.62 30.3668C1134.47 30.6605 1134.4 31.1033 1134.4 31.6951ZM1135 37.9163C1133.91 37.9163 1132.88 37.7086 1131.91 37.293C1130.95 36.8775 1130.11 36.3135 1129.4 35.6011C1128.69 34.8888 1128.12 34.0511 1127.71 33.088C1127.29 32.125 1127.08 31.096 1127.08 30.0011C1127.08 28.9061 1127.29 27.8769 1127.71 26.9134C1128.12 25.95 1128.69 25.1119 1129.4 24.3993C1130.11 23.6866 1130.95 23.1224 1131.91 22.7065C1132.87 22.2909 1133.9 22.083 1135 22.083C1136.09 22.083 1137.12 22.2908 1138.09 22.7063C1139.05 23.1219 1139.89 23.6859 1140.6 24.3982C1141.31 25.1106 1141.88 25.9483 1142.29 26.9113C1142.71 27.8744 1142.92 28.9034 1142.92 29.9982C1142.92 31.0932 1142.71 32.1225 1142.29 33.0859C1141.88 34.0494 1141.31 34.8875 1140.6 35.6001C1139.89 36.3127 1139.05 36.877 1138.09 37.2928C1137.13 37.7085 1136.1 37.9163 1135 37.9163ZM1135 36.6663C1136.86 36.6663 1138.44 36.0205 1139.73 34.7288C1141.02 33.4372 1141.67 31.8608 1141.67 29.9997C1141.67 28.1386 1141.02 26.5622 1139.73 25.2705C1138.44 23.9788 1136.86 23.333 1135 23.333C1133.14 23.333 1131.56 23.9788 1130.27 25.2705C1128.98 26.5622 1128.33 28.1386 1128.33 29.9997C1128.33 31.8608 1128.98 33.4372 1130.27 34.7288C1131.56 36.0205 1133.14 36.6663 1135 36.6663Z" fill="white"/>
<rect x="1161" y="14" width="103" height="32" rx="16" fill="white" fill-opacity="0.1"/>
<rect x="1161.5" y="14.5" width="102" height="31" rx="15.5" stroke="white" stroke-opacity="0.1"/>
<path d="M1165 30C1165 23.3726 1170.37 18 1177 18C1183.63 18 1189 23.3726 1189 30C1189 36.6274 1183.63 42 1177 42C1170.37 42 1165 36.6274 1165 30Z" fill="#DDEDDA"/>
<path d="M1173.64 35V24.8182H1177.27C1178.06 24.8182 1178.72 24.9624 1179.24 25.2507C1179.76 25.5391 1180.15 25.9335 1180.41 26.4339C1180.67 26.9311 1180.8 27.4912 1180.8 28.1143C1180.8 28.7408 1180.66 29.3042 1180.4 29.8047C1180.14 30.3018 1179.75 30.6963 1179.23 30.9879C1178.71 31.2763 1178.05 31.4205 1177.27 31.4205H1174.77V30.1179H1177.13C1177.63 30.1179 1178.03 30.0317 1178.34 29.8594C1178.66 29.6837 1178.88 29.4451 1179.03 29.1435C1179.18 28.8419 1179.25 28.4988 1179.25 28.1143C1179.25 27.7299 1179.18 27.3885 1179.03 27.0902C1178.88 26.7919 1178.65 26.5582 1178.34 26.3892C1178.03 26.2202 1177.62 26.1357 1177.11 26.1357H1175.18V35H1173.64Z" fill="#0A2916"/>
<path d="M1193.79 34V26H1196.79C1197.4 26 1197.92 26.1146 1198.34 26.3437C1198.76 26.5729 1199.07 26.888 1199.29 27.2891C1199.5 27.6875 1199.61 28.1406 1199.61 28.6484C1199.61 29.1615 1199.5 29.6172 1199.29 30.0156C1199.07 30.4141 1198.75 30.7279 1198.33 30.957C1197.91 31.1836 1197.39 31.2969 1196.77 31.2969H1194.78V30.1055H1196.57C1196.93 30.1055 1197.23 30.043 1197.46 29.918C1197.69 29.793 1197.86 29.6211 1197.96 29.4023C1198.08 29.1836 1198.13 28.9323 1198.13 28.6484C1198.13 28.3646 1198.08 28.1146 1197.96 27.8984C1197.86 27.6823 1197.68 27.5143 1197.45 27.3945C1197.22 27.2721 1196.93 27.2109 1196.57 27.2109H1195.24V34H1193.79ZM1200.89 34V28H1202.26V29H1202.32C1202.43 28.6536 1202.62 28.3867 1202.88 28.1992C1203.15 28.0091 1203.46 27.9141 1203.8 27.9141C1203.88 27.9141 1203.97 27.918 1204.06 27.9258C1204.16 27.931 1204.24 27.9401 1204.31 27.9531V29.2539C1204.25 29.2331 1204.16 29.2148 1204.02 29.1992C1203.9 29.181 1203.77 29.1719 1203.65 29.1719C1203.4 29.1719 1203.16 29.2279 1202.96 29.3398C1202.76 29.4492 1202.6 29.6016 1202.48 29.7969C1202.36 29.9922 1202.3 30.2174 1202.3 30.4727V34H1200.89ZM1205.33 34V28H1206.75V34H1205.33ZM1206.04 27.1484C1205.82 27.1484 1205.63 27.0742 1205.46 26.9258C1205.3 26.7747 1205.22 26.5937 1205.22 26.3828C1205.22 26.1693 1205.3 25.9883 1205.46 25.8398C1205.63 25.6888 1205.82 25.6133 1206.04 25.6133C1206.27 25.6133 1206.46 25.6888 1206.62 25.8398C1206.78 25.9883 1206.86 26.1693 1206.86 26.3828C1206.86 26.5937 1206.78 26.7747 1206.62 26.9258C1206.46 27.0742 1206.27 27.1484 1206.04 27.1484ZM1209.16 36.25C1208.97 36.25 1208.79 36.2344 1208.63 36.2031C1208.46 36.1745 1208.34 36.1406 1208.24 36.1016L1208.57 35C1208.77 35.0599 1208.96 35.0885 1209.12 35.0859C1209.28 35.0833 1209.42 35.0326 1209.54 34.9336C1209.67 34.8372 1209.77 34.6758 1209.86 34.4492L1209.98 34.125L1207.81 28H1209.31L1210.69 32.5312H1210.75L1212.14 28H1213.64L1211.24 34.7266C1211.13 35.0443 1210.98 35.3164 1210.79 35.543C1210.61 35.7721 1210.38 35.9466 1210.11 36.0664C1209.85 36.1888 1209.53 36.25 1209.16 36.25ZM1216.26 34.1211C1215.88 34.1211 1215.54 34.0534 1215.23 33.918C1214.93 33.7799 1214.69 33.5768 1214.51 33.3086C1214.34 33.0404 1214.25 32.7096 1214.25 32.3164C1214.25 31.9779 1214.31 31.6979 1214.44 31.4766C1214.56 31.2552 1214.73 31.0781 1214.95 30.9453C1215.17 30.8125 1215.41 30.7122 1215.68 30.6445C1215.95 30.5742 1216.24 30.5234 1216.53 30.4922C1216.88 30.4557 1217.16 30.4232 1217.38 30.3945C1217.6 30.3633 1217.76 30.3164 1217.86 30.2539C1217.96 30.1888 1218.01 30.0885 1218.01 29.9531V29.9297C1218.01 29.6354 1217.92 29.4076 1217.75 29.2461C1217.58 29.0846 1217.32 29.0039 1217 29.0039C1216.65 29.0039 1216.37 29.0794 1216.17 29.2305C1215.97 29.3815 1215.84 29.5599 1215.77 29.7656L1214.45 29.5781C1214.55 29.2135 1214.72 28.9089 1214.96 28.6641C1215.2 28.4167 1215.49 28.2318 1215.84 28.1094C1216.19 27.9844 1216.57 27.9219 1216.99 27.9219C1217.28 27.9219 1217.57 27.9557 1217.85 28.0234C1218.14 28.0911 1218.4 28.2031 1218.64 28.3594C1218.87 28.513 1219.06 28.7227 1219.21 28.9883C1219.35 29.2539 1219.43 29.5859 1219.43 29.9844V34H1218.07V33.1758H1218.02C1217.93 33.3424 1217.81 33.4987 1217.66 33.6445C1217.5 33.7878 1217.31 33.9036 1217.07 33.9922C1216.84 34.0781 1216.57 34.1211 1216.26 34.1211ZM1216.62 33.082C1216.91 33.082 1217.15 33.026 1217.36 32.9141C1217.57 32.7995 1217.73 32.6484 1217.84 32.4609C1217.96 32.2734 1218.02 32.069 1218.02 31.8477V31.1406C1217.97 31.1771 1217.9 31.2109 1217.79 31.2422C1217.68 31.2734 1217.57 31.3008 1217.44 31.3242C1217.31 31.3477 1217.18 31.3685 1217.05 31.3867C1216.92 31.4049 1216.81 31.4206 1216.72 31.4336C1216.51 31.4622 1216.32 31.5091 1216.15 31.5742C1215.99 31.6393 1215.85 31.7305 1215.76 31.8477C1215.66 31.9622 1215.61 32.1107 1215.61 32.293C1215.61 32.5534 1215.71 32.75 1215.9 32.8828C1216.09 33.0156 1216.33 33.082 1216.62 33.082ZM1222.34 30.4844V34H1220.93V28H1222.28V29.0195H1222.35C1222.49 28.6836 1222.71 28.4167 1223.01 28.2187C1223.32 28.0208 1223.69 27.9219 1224.14 27.9219C1224.56 27.9219 1224.92 28.0104 1225.22 28.1875C1225.53 28.3646 1225.77 28.6211 1225.94 28.957C1226.11 29.293 1226.2 29.7005 1226.2 30.1797V34H1224.78V30.3984C1224.78 29.9974 1224.68 29.6836 1224.47 29.457C1224.26 29.2305 1223.98 29.1172 1223.61 29.1172C1223.37 29.1172 1223.15 29.1719 1222.95 29.2812C1222.76 29.388 1222.61 29.543 1222.5 29.7461C1222.4 29.9492 1222.34 30.1953 1222.34 30.4844ZM1229 32.1172L1229 30.4102H1229.23L1231.38 28H1233.04L1230.38 30.9531H1230.09L1229 32.1172ZM1227.72 34V26H1229.13V34H1227.72ZM1231.48 34L1229.53 31.2695L1230.48 30.2734L1233.17 34H1231.48ZM1235.79 34.1211C1235.41 34.1211 1235.06 34.0534 1234.76 33.918C1234.46 33.7799 1234.22 33.5768 1234.04 33.3086C1233.87 33.0404 1233.78 32.7096 1233.78 32.3164C1233.78 31.9779 1233.84 31.6979 1233.97 31.4766C1234.09 31.2552 1234.26 31.0781 1234.48 30.9453C1234.7 30.8125 1234.94 30.7122 1235.21 30.6445C1235.48 30.5742 1235.77 30.5234 1236.06 30.4922C1236.41 30.4557 1236.69 30.4232 1236.91 30.3945C1237.13 30.3633 1237.29 30.3164 1237.39 30.2539C1237.49 30.1888 1237.54 30.0885 1237.54 29.9531V29.9297C1237.54 29.6354 1237.45 29.4076 1237.28 29.2461C1237.11 29.0846 1236.85 29.0039 1236.53 29.0039C1236.18 29.0039 1235.9 29.0794 1235.7 29.2305C1235.5 29.3815 1235.37 29.5599 1235.3 29.7656L1233.97 29.5781C1234.08 29.2135 1234.25 28.9089 1234.49 28.6641C1234.73 28.4167 1235.02 28.2318 1235.37 28.1094C1235.72 27.9844 1236.1 27.9219 1236.52 27.9219C1236.81 27.9219 1237.09 27.9557 1237.38 28.0234C1237.67 28.0911 1237.93 28.2031 1238.17 28.3594C1238.4 28.513 1238.59 28.7227 1238.74 28.9883C1238.88 29.2539 1238.96 29.5859 1238.96 29.9844V34H1237.6V33.1758H1237.55C1237.46 33.3424 1237.34 33.4987 1237.19 33.6445C1237.03 33.7878 1236.84 33.9036 1236.6 33.9922C1236.37 34.0781 1236.1 34.1211 1235.79 34.1211ZM1236.15 33.082C1236.44 33.082 1236.68 33.026 1236.89 32.9141C1237.1 32.7995 1237.26 32.6484 1237.37 32.4609C1237.49 32.2734 1237.55 32.069 1237.55 31.8477V31.1406C1237.5 31.1771 1237.43 31.2109 1237.32 31.2422C1237.21 31.2734 1237.1 31.3008 1236.97 31.3242C1236.84 31.3477 1236.71 31.3685 1236.58 31.3867C1236.45 31.4049 1236.34 31.4206 1236.25 31.4336C1236.04 31.4622 1235.85 31.5091 1235.68 31.5742C1235.52 31.6393 1235.38 31.7305 1235.29 31.8477C1235.19 31.9622 1235.14 32.1107 1235.14 32.293C1235.14 32.5534 1235.24 32.75 1235.43 32.8828C1235.62 33.0156 1235.86 33.082 1236.15 33.082Z" fill="white"/>
<path d="M1252 31.8L1248.4 28.2H1255.6L1252 31.8Z" fill="white"/>
<path d="M480 23C480 17.4772 484.477 13 490 13H790C795.523 13 800 17.4772 800 23V37C800 42.5228 795.523 47 790 47H490C484.477 47 480 42.5228 480 37V23Z" fill="white" fill-opacity="0.1"/>
<path d="M490 13.5H790C795.247 13.5 799.5 17.7533 799.5 23V37C799.5 42.2467 795.247 46.5 790 46.5H490C484.753 46.5 480.5 42.2467 480.5 37V23C480.5 17.7533 484.753 13.5 490 13.5Z" stroke="white" stroke-opacity="0.1"/>
<path d="M545.193 34V25.2727H546.25V29.1591H550.904V25.2727H551.96V34H550.904V30.0966H546.25V34H545.193ZM556.689 34.1364C556.098 34.1364 555.579 33.9957 555.133 33.7145C554.69 33.4332 554.344 33.0398 554.094 32.5341C553.847 32.0284 553.723 31.4375 553.723 30.7614C553.723 30.0795 553.847 29.4844 554.094 28.9759C554.344 28.4673 554.69 28.0724 555.133 27.7912C555.579 27.5099 556.098 27.3693 556.689 27.3693C557.28 27.3693 557.797 27.5099 558.24 27.7912C558.686 28.0724 559.033 28.4673 559.28 28.9759C559.53 29.4844 559.655 30.0795 559.655 30.7614C559.655 31.4375 559.53 32.0284 559.28 32.5341C559.033 33.0398 558.686 33.4332 558.24 33.7145C557.797 33.9957 557.28 34.1364 556.689 34.1364ZM556.689 33.233C557.138 33.233 557.507 33.1179 557.797 32.8878C558.087 32.6577 558.301 32.3551 558.44 31.9801C558.579 31.6051 558.649 31.1989 558.649 30.7614C558.649 30.3239 558.579 29.9162 558.44 29.5384C558.301 29.1605 558.087 28.8551 557.797 28.6222C557.507 28.3892 557.138 28.2727 556.689 28.2727C556.24 28.2727 555.871 28.3892 555.581 28.6222C555.291 28.8551 555.077 29.1605 554.937 29.5384C554.798 29.9162 554.729 30.3239 554.729 30.7614C554.729 31.1989 554.798 31.6051 554.937 31.9801C555.077 32.3551 555.291 32.6577 555.581 32.8878C555.871 33.1179 556.24 33.233 556.689 33.233ZM561.28 34V27.4545H562.251V28.4773H562.337C562.473 28.1278 562.693 27.8565 562.997 27.6634C563.301 27.4673 563.666 27.3693 564.092 27.3693C564.524 27.3693 564.884 27.4673 565.171 27.6634C565.46 27.8565 565.686 28.1278 565.848 28.4773H565.916C566.084 28.1392 566.335 27.8707 566.671 27.6719C567.006 27.4702 567.408 27.3693 567.876 27.3693C568.462 27.3693 568.94 27.5526 569.313 27.919C569.685 28.2827 569.871 28.8494 569.871 29.6193V34H568.865V29.6193C568.865 29.1364 568.733 28.7912 568.469 28.5838C568.205 28.3764 567.894 28.2727 567.536 28.2727C567.075 28.2727 566.719 28.4119 566.466 28.6903C566.213 28.9659 566.087 29.3153 566.087 29.7386V34H565.064V29.517C565.064 29.1449 564.943 28.8452 564.702 28.6179C564.46 28.3878 564.149 28.2727 563.769 28.2727C563.507 28.2727 563.263 28.3423 563.036 28.4815C562.811 28.6207 562.629 28.8139 562.49 29.0611C562.354 29.3054 562.286 29.5881 562.286 29.9091V34H561.28ZM574.544 34.1364C573.913 34.1364 573.369 33.9972 572.912 33.7188C572.457 33.4375 572.106 33.0455 571.859 32.5426C571.615 32.0369 571.493 31.4489 571.493 30.7784C571.493 30.108 571.615 29.517 571.859 29.0057C572.106 28.4915 572.45 28.0909 572.891 27.804C573.334 27.5142 573.851 27.3693 574.442 27.3693C574.783 27.3693 575.119 27.4261 575.452 27.5398C575.784 27.6534 576.087 27.8381 576.359 28.0938C576.632 28.3466 576.849 28.6818 577.011 29.0994C577.173 29.517 577.254 30.0312 577.254 30.642V31.0682H572.209V30.1989H576.231C576.231 29.8295 576.158 29.5 576.01 29.2102C575.865 28.9205 575.658 28.6918 575.388 28.5241C575.121 28.3565 574.805 28.2727 574.442 28.2727C574.041 28.2727 573.694 28.3722 573.402 28.571C573.112 28.767 572.889 29.0227 572.733 29.3381C572.577 29.6534 572.498 29.9915 572.498 30.3523V30.9318C572.498 31.4261 572.584 31.8452 572.754 32.1889C572.927 32.5298 573.167 32.7898 573.474 32.9688C573.781 33.1449 574.138 33.233 574.544 33.233C574.808 33.233 575.047 33.196 575.26 33.1222C575.476 33.0455 575.662 32.9318 575.818 32.7812C575.974 32.6278 576.095 32.4375 576.18 32.2102L577.152 32.483C577.05 32.8125 576.878 33.1023 576.636 33.3523C576.395 33.5994 576.096 33.7926 575.741 33.9318C575.386 34.0682 574.987 34.1364 574.544 34.1364Z" fill="white"/>
<path d="M642 23C642 19.6863 644.686 17 648 17H790C793.314 17 796 19.6863 796 23V37C796 40.3137 793.314 43 790 43H648C644.686 43 642 40.3137 642 37V23Z" fill="white"/>
<path d="M706.431 34H703.474V25.2727H706.491C707.357 25.2727 708.102 25.4474 708.724 25.7969C709.349 26.1435 709.829 26.642 710.164 27.2926C710.499 27.9432 710.667 28.7216 710.667 29.6278C710.667 30.5369 710.498 31.3182 710.16 31.9716C709.825 32.625 709.34 33.1264 708.707 33.4759C708.076 33.8253 707.318 34 706.431 34ZM705.055 32.6321H706.354C706.962 32.6321 707.47 32.5213 707.876 32.2997C708.282 32.0753 708.587 31.7415 708.792 31.2983C708.996 30.8523 709.099 30.2955 709.099 29.6278C709.099 28.9602 708.996 28.4062 708.792 27.9659C708.587 27.5227 708.285 27.1918 707.884 26.973C707.487 26.7514 706.992 26.6406 706.401 26.6406H705.055V32.6321ZM715.089 34.1278C714.432 34.1278 713.866 33.9915 713.388 33.7188C712.914 33.4432 712.549 33.054 712.293 32.5511C712.037 32.0455 711.91 31.4503 711.91 30.7656C711.91 30.0923 712.037 29.5014 712.293 28.9929C712.552 28.4815 712.912 28.0838 713.376 27.7997C713.839 27.5128 714.383 27.3693 715.008 27.3693C715.411 27.3693 715.792 27.4347 716.15 27.5653C716.51 27.6932 716.829 27.892 717.104 28.1619C717.383 28.4318 717.601 28.7756 717.76 29.1932C717.92 29.608 717.999 30.1023 717.999 30.6761V31.1491H712.634V30.1094H716.52C716.518 29.8139 716.454 29.5511 716.329 29.321C716.204 29.0881 716.029 28.9048 715.805 28.7713C715.583 28.6378 715.324 28.571 715.029 28.571C714.714 28.571 714.437 28.6477 714.198 28.8011C713.959 28.9517 713.773 29.1506 713.64 29.3977C713.509 29.642 713.442 29.9105 713.439 30.2031V31.1108C713.439 31.4915 713.509 31.8182 713.648 32.0909C713.787 32.3608 713.982 32.5682 714.232 32.7131C714.482 32.8551 714.775 32.9261 715.11 32.9261C715.334 32.9261 715.537 32.8949 715.719 32.8324C715.901 32.767 716.059 32.6719 716.192 32.5469C716.326 32.4219 716.427 32.267 716.495 32.0824L717.935 32.2443C717.844 32.625 717.671 32.9574 717.415 33.2415C717.162 33.5227 716.839 33.7415 716.444 33.8977C716.049 34.0511 715.597 34.1278 715.089 34.1278ZM721.278 34.1321C720.863 34.1321 720.489 34.0582 720.157 33.9105C719.827 33.7599 719.566 33.5384 719.373 33.2457C719.183 32.9531 719.087 32.5923 719.087 32.1634C719.087 31.794 719.156 31.4886 719.292 31.2472C719.428 31.0057 719.614 30.8125 719.85 30.6676C720.086 30.5227 720.352 30.4134 720.647 30.3395C720.945 30.2628 721.254 30.2074 721.572 30.1733C721.955 30.1335 722.266 30.098 722.505 30.0668C722.744 30.0327 722.917 29.9815 723.025 29.9134C723.136 29.8423 723.191 29.733 723.191 29.5852V29.5597C723.191 29.2386 723.096 28.9901 722.906 28.8139C722.715 28.6378 722.441 28.5497 722.083 28.5497C721.705 28.5497 721.406 28.6321 721.184 28.7969C720.965 28.9616 720.817 29.1562 720.741 29.3807L719.3 29.1761C719.414 28.7784 719.602 28.446 719.863 28.179C720.124 27.9091 720.444 27.7074 720.822 27.5739C721.2 27.4375 721.617 27.3693 722.075 27.3693C722.39 27.3693 722.704 27.4062 723.016 27.4801C723.329 27.554 723.614 27.6761 723.873 27.8466C724.131 28.0142 724.339 28.2429 724.495 28.5327C724.654 28.8224 724.734 29.1847 724.734 29.6193V34H723.251V33.1009H723.2C723.106 33.2827 722.974 33.4531 722.803 33.6122C722.636 33.7685 722.424 33.8949 722.168 33.9915C721.915 34.0852 721.619 34.1321 721.278 34.1321ZM721.678 32.9986C721.988 32.9986 722.256 32.9375 722.484 32.8153C722.711 32.6903 722.886 32.5256 723.008 32.321C723.133 32.1165 723.195 31.8935 723.195 31.652V30.8807C723.147 30.9205 723.065 30.9574 722.948 30.9915C722.835 31.0256 722.707 31.0554 722.565 31.081C722.423 31.1065 722.282 31.1293 722.143 31.1491C722.004 31.169 721.883 31.1861 721.781 31.2003C721.55 31.2315 721.344 31.2827 721.163 31.3537C720.981 31.4247 720.837 31.5241 720.732 31.652C720.627 31.777 720.575 31.9389 720.575 32.1378C720.575 32.4219 720.678 32.6364 720.886 32.7812C721.093 32.9261 721.357 32.9986 721.678 32.9986ZM727.917 25.2727V34H726.375V25.2727H727.917ZM734.767 29.1847L733.361 29.3381C733.321 29.196 733.251 29.0625 733.152 28.9375C733.055 28.8125 732.925 28.7116 732.76 28.6349C732.595 28.5582 732.393 28.5199 732.155 28.5199C731.834 28.5199 731.564 28.5895 731.345 28.7287C731.129 28.8679 731.023 29.0483 731.026 29.2699C731.023 29.4602 731.092 29.6151 731.234 29.7344C731.379 29.8537 731.618 29.9517 731.95 30.0284L733.067 30.267C733.686 30.4006 734.146 30.6122 734.447 30.902C734.751 31.1918 734.905 31.571 734.908 32.0398C734.905 32.4517 734.784 32.8153 734.545 33.1307C734.31 33.4432 733.981 33.6875 733.561 33.8636C733.141 34.0398 732.658 34.1278 732.112 34.1278C731.311 34.1278 730.666 33.9602 730.178 33.625C729.689 33.2869 729.398 32.8168 729.304 32.2145L730.808 32.0696C730.876 32.3651 731.021 32.5881 731.243 32.7386C731.464 32.8892 731.753 32.9645 732.108 32.9645C732.474 32.9645 732.768 32.8892 732.99 32.7386C733.214 32.5881 733.327 32.402 733.327 32.1804C733.327 31.9929 733.254 31.8381 733.109 31.7159C732.967 31.5937 732.746 31.5 732.445 31.4347L731.328 31.2003C730.7 31.0696 730.236 30.8494 729.935 30.5398C729.633 30.2273 729.484 29.8324 729.487 29.3551C729.484 28.9517 729.594 28.6023 729.815 28.3068C730.04 28.0085 730.351 27.7784 730.749 27.6165C731.149 27.4517 731.611 27.3693 732.133 27.3693C732.901 27.3693 733.504 27.5327 733.945 27.8594C734.388 28.1861 734.662 28.6278 734.767 29.1847Z" fill="#1C4B2E"/>
<defs>
<linearGradient id="paint0_linear_5532_7820" x1="640" y1="0" x2="640" y2="60" gradientUnits="userSpaceOnUse">
<stop stop-color="#205B34"/>
<stop offset="1" stop-color="#1C4B2E"/>
</linearGradient>
</defs>
</svg>
  </header>`;
}

function iconSidebar() {
  return `
  <aside class="sui-icon-sidebar">
    <svg width="48" height="244" viewBox="0 0 48 244" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 8C0 3.58173 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V236C48 240.418 44.4183 244 40 244H8C3.58172 244 0 240.418 0 236V8Z" fill="white"/>
<path d="M6 24C6 19.5817 9.58172 16 14 16H34C38.4183 16 42 19.5817 42 24V44C42 48.4183 38.4183 52 34 52H14C9.58172 52 6 48.4183 6 44V24Z" fill="#E0F8E7"/>
<path d="M27.2933 31.3798V36.6377C27.2933 36.8103 27.37 36.9275 27.5233 36.9892C27.6765 37.0508 27.8146 37.0202 27.9375 36.8973L29.7308 35.1042C29.8675 34.9674 29.9749 34.8069 30.0529 34.6227C30.1308 34.4385 30.1698 34.2449 30.1698 34.0417V29.2565C30.1698 28.8422 30.0223 28.4875 29.7273 28.1925C29.4323 27.8975 29.0776 27.75 28.6633 27.75H23.8781C23.6749 27.75 23.4812 27.789 23.2971 27.8671C23.1129 27.945 22.9524 28.0524 22.8156 28.1892L21.0225 29.9823C20.8996 30.1052 20.869 30.2433 20.9306 30.3967C20.9923 30.55 21.1094 30.6267 21.2821 30.6267H26.54C26.7535 30.6267 26.9324 30.6988 27.0767 30.8431C27.2211 30.9876 27.2933 31.1665 27.2933 31.3798ZM22.75 35.9231V41.181C22.75 41.3537 22.8267 41.4708 22.98 41.5325C23.1333 41.5942 23.2714 41.5635 23.3942 41.4406L25.1875 39.6473C25.3243 39.5106 25.4317 39.3502 25.5096 39.166C25.5876 38.9819 25.6267 38.7881 25.6267 38.5848V33.7996C25.6267 33.3854 25.4792 33.0308 25.1842 32.7358C24.8892 32.4408 24.5345 32.2933 24.1202 32.2933H19.335C19.1318 32.2933 18.9381 32.3323 18.754 32.4102C18.5698 32.4883 18.4093 32.5956 18.2725 32.7323L16.4792 34.5256C16.3564 34.6485 16.3258 34.7866 16.3875 34.9398C16.4492 35.0931 16.5662 35.1698 16.7387 35.1698H21.9969C22.2102 35.1698 22.3891 35.242 22.5335 35.3865C22.6778 35.5308 22.75 35.7097 22.75 35.9231Z" fill="#22733E"/>
<path d="M6 68C6 63.5817 9.58172 60 14 60H34C38.4183 60 42 63.5817 42 68V88C42 92.4183 38.4183 96 34 96H14C9.58172 96 6 92.4183 6 88V68Z" fill="white"/>
<path d="M16.0833 85.0833V83.8333H23.375V74.5689C22.9979 74.4706 22.668 74.2841 22.3854 74.0096C22.1028 73.735 21.9096 73.3985 21.806 73H19.0481L21.5 78.9214C21.484 79.5464 21.2126 80.078 20.6858 80.516C20.1591 80.9541 19.5278 81.1731 18.7916 81.1731C18.0555 81.1731 17.4241 80.9541 16.8975 80.516C16.3708 80.078 16.0994 79.5464 16.0833 78.9214L18.5352 73H16.9166V71.75H21.806C21.9353 71.2746 22.2005 70.878 22.6016 70.5602C23.0029 70.2423 23.469 70.0833 24 70.0833C24.531 70.0833 24.9971 70.2423 25.3983 70.5602C25.7994 70.878 26.0646 71.2746 26.1939 71.75H31.0833V73H29.4648L31.9166 78.9214C31.9005 79.5464 31.6291 80.078 31.1025 80.516C30.5758 80.9541 29.9444 81.1731 29.2083 81.1731C28.4722 81.1731 27.8408 80.9541 27.3141 80.516C26.7873 80.078 26.516 79.5464 26.5 78.9214L28.9519 73H26.1939C26.0903 73.3985 25.8972 73.735 25.6146 74.0096C25.3319 74.2841 25.0021 74.4706 24.625 74.5689V83.8333H31.9166V85.0833H16.0833ZM27.5898 78.8814H30.8269L29.2083 74.976L27.5898 78.8814ZM17.1731 78.8814H20.4102L18.7916 74.976L17.1731 78.8814ZM24 73.4166C24.2896 73.4166 24.5355 73.3154 24.7379 73.1129C24.9404 72.9105 25.0416 72.6646 25.0416 72.375C25.0416 72.0854 24.9404 71.8394 24.7379 71.6371C24.5355 71.4346 24.2896 71.3333 24 71.3333C23.7104 71.3333 23.4644 71.4346 23.2621 71.6371C23.0596 71.8394 22.9583 72.0854 22.9583 72.375C22.9583 72.6646 23.0596 72.9105 23.2621 73.1129C23.4644 73.3154 23.7104 73.4166 24 73.4166Z" fill="#525866"/>
<path d="M6 112C6 107.582 9.58172 104 14 104H34C38.4183 104 42 107.582 42 112V132C42 136.418 38.4183 140 34 140H14C9.58172 140 6 136.418 6 132V112Z" fill="white"/>
<path d="M25.6185 120.122V119.026C26.0716 118.815 26.5457 118.657 27.0408 118.552C27.5361 118.447 28.0503 118.394 28.5833 118.394C28.9178 118.394 29.2426 118.418 29.5577 118.466C29.8728 118.513 30.1891 118.576 30.5065 118.654V119.699C30.1945 119.59 29.8844 119.511 29.576 119.461C29.2678 119.412 28.9369 119.388 28.5833 119.388C28.0503 119.388 27.534 119.451 27.0344 119.578C26.5349 119.704 26.063 119.886 25.6185 120.122ZM25.6185 124.689V123.577C26.0609 123.366 26.5337 123.209 27.0369 123.103C27.5401 122.998 28.0556 122.946 28.5833 122.946C28.9178 122.946 29.2426 122.969 29.5577 123.017C29.8728 123.064 30.1891 123.127 30.5065 123.205V124.25C30.1945 124.141 29.8844 124.062 29.576 124.013C29.2678 123.964 28.9369 123.939 28.5833 123.939C28.0503 123.939 27.534 124.003 27.0344 124.131C26.5349 124.258 26.063 124.444 25.6185 124.689ZM25.6185 122.414V121.301C26.0716 121.091 26.5457 120.933 27.0408 120.828C27.5361 120.722 28.0503 120.67 28.5833 120.67C28.9178 120.67 29.2426 120.694 29.5577 120.741C29.8728 120.789 30.1891 120.852 30.5065 120.93V121.974C30.1945 121.865 29.8844 121.786 29.576 121.737C29.2678 121.688 28.9369 121.664 28.5833 121.664C28.0503 121.664 27.534 121.73 27.0344 121.861C26.5349 121.993 26.063 122.177 25.6185 122.414ZM19.4167 125.349C20.1068 125.349 20.7783 125.428 21.431 125.584C22.0838 125.741 22.7318 125.986 23.375 126.321V118.128C22.7896 117.747 22.156 117.461 21.4744 117.27C20.7927 117.079 20.1068 116.984 19.4167 116.984C18.9167 116.984 18.4495 117.023 18.0152 117.102C17.5809 117.18 17.1346 117.309 16.6763 117.487C16.6122 117.508 16.5668 117.539 16.54 117.579C16.5133 117.619 16.5 117.663 16.5 117.711V125.593C16.5 125.668 16.5267 125.723 16.5802 125.757C16.6335 125.792 16.6923 125.796 16.7565 125.769C17.1517 125.635 17.5689 125.531 18.0079 125.458C18.4471 125.386 18.9167 125.349 19.4167 125.349ZM24.625 126.321C25.2682 125.986 25.9162 125.741 26.569 125.584C27.2217 125.428 27.8932 125.349 28.5833 125.349C29.0833 125.349 29.5529 125.386 29.9921 125.458C30.4311 125.531 30.8483 125.635 31.2435 125.769C31.3077 125.796 31.3665 125.792 31.4198 125.757C31.4733 125.723 31.5 125.668 31.5 125.593V117.711C31.5 117.663 31.4867 117.621 31.46 117.583C31.4332 117.546 31.3878 117.514 31.3237 117.487C30.8654 117.309 30.4191 117.18 29.9848 117.102C29.5505 117.023 29.0833 116.984 28.5833 116.984C27.8932 116.984 27.2073 117.079 26.5256 117.27C25.844 117.461 25.2104 117.747 24.625 118.128V126.321ZM24 128.154C23.3281 127.658 22.6032 127.275 21.8254 127.005C21.0476 126.735 20.2447 126.599 19.4167 126.599C18.9082 126.599 18.4088 126.656 17.9183 126.768C17.4279 126.881 16.9551 127.047 16.5 127.266C16.2031 127.403 15.9205 127.381 15.6523 127.201C15.3841 127.021 15.25 126.766 15.25 126.436V117.388C15.25 117.208 15.2963 117.04 15.3888 116.882C15.4811 116.725 15.6144 116.611 15.7885 116.542C16.3526 116.267 16.9404 116.064 17.5521 115.932C18.1638 115.8 18.7853 115.734 19.4167 115.734C20.2275 115.734 21.0197 115.845 21.7933 116.066C22.5668 116.288 23.3024 116.615 24 117.048C24.6976 116.615 25.4332 116.288 26.2067 116.066C26.9803 115.845 27.7725 115.734 28.5833 115.734C29.2147 115.734 29.8363 115.8 30.4479 115.932C31.0596 116.064 31.6474 116.267 32.2115 116.542C32.3856 116.611 32.5189 116.725 32.6113 116.882C32.7038 117.04 32.75 117.208 32.75 117.388V126.436C32.75 126.766 32.6106 127.018 32.3317 127.193C32.0528 127.368 31.7595 127.387 31.4519 127.25C31.0022 127.036 30.5361 126.874 30.0538 126.764C29.5714 126.654 29.0813 126.599 28.5833 126.599C27.7553 126.599 26.9524 126.735 26.1746 127.005C25.3968 127.275 24.6719 127.658 24 128.154Z" fill="#525866"/>
<path d="M6 156C6 151.582 9.58172 148 14 148H34C38.4183 148 42 151.582 42 156V176C42 180.418 38.4183 184 34 184H14C9.58172 184 6 180.418 6 176V156Z" fill="white"/>
<path d="M18.7116 167.319C19.3609 167.319 19.8919 167.539 20.3474 167.994C20.8042 168.451 21.022 168.977 21.0222 169.613C21.0222 170.262 20.8026 170.794 20.3474 171.249C19.8918 171.704 19.3608 171.925 18.7116 171.925C18.0751 171.925 17.5484 171.706 17.0915 171.249C16.6366 170.794 16.4167 170.263 16.4167 169.613C16.4168 168.977 16.635 168.451 17.0915 167.994C17.5484 167.537 18.0749 167.319 18.7116 167.319ZM18.7116 158.425C19.3609 158.425 19.8919 158.645 20.3474 159.1C20.8044 159.556 21.0222 160.083 21.0222 160.72C21.0221 161.369 20.8027 161.9 20.3474 162.355C19.8919 162.811 19.3607 163.03 18.7116 163.03C18.0751 163.03 17.5484 162.813 17.0915 162.355C16.6365 161.9 16.4167 161.369 16.4167 160.72C16.4167 160.083 16.6348 159.556 17.0915 159.1C17.5484 158.643 18.0749 158.425 18.7116 158.425ZM27.6218 158.425C28.2585 158.425 28.785 158.643 29.2419 159.1C29.6986 159.556 29.9167 160.083 29.9167 160.72C29.9167 161.369 29.6969 161.9 29.2419 162.355C28.785 162.813 28.2583 163.03 27.6218 163.03C26.9727 163.03 26.4415 162.811 25.986 162.355C25.5307 161.9 25.3112 161.369 25.3112 160.72C25.3112 160.083 25.529 159.556 25.986 159.1C26.4415 158.645 26.9725 158.425 27.6218 158.425Z" stroke="#525866" stroke-width="1.5"/>
<path d="M6 200C6 195.582 9.58172 192 14 192H34C38.4183 192 42 195.582 42 200V220C42 224.418 38.4183 228 34 228H14C9.58172 228 6 224.418 6 220V200Z" fill="white"/>
<path d="M16.7565 217.58C16.3355 217.58 15.9792 217.434 15.6875 217.143C15.3958 216.851 15.25 216.495 15.25 216.074V207.676H16.5V216.074C16.5 216.138 16.5267 216.197 16.5802 216.25C16.6335 216.303 16.6923 216.33 16.7565 216.33H30.0417V217.58H16.7565ZM19.6731 214.663C19.2522 214.663 18.8958 214.518 18.6042 214.226C18.3125 213.934 18.1667 213.578 18.1667 213.157V204.664H22.4615V203.173C22.4615 202.752 22.6073 202.396 22.899 202.104C23.1906 201.813 23.5469 201.667 23.9679 201.667H26.9487C27.3696 201.667 27.7258 201.813 28.0175 202.104C28.3092 202.396 28.455 202.752 28.455 203.173V204.664H32.75V213.157C32.75 213.578 32.6042 213.934 32.3125 214.226C32.0208 214.518 31.6645 214.663 31.2435 214.663H19.6731ZM19.6731 213.414H31.2435C31.3077 213.414 31.3665 213.387 31.4198 213.333C31.4733 213.28 31.5 213.221 31.5 213.157V205.914H19.4167V213.157C19.4167 213.221 19.4433 213.28 19.4967 213.333C19.5501 213.387 19.609 213.414 19.6731 213.414ZM23.7115 204.664H27.2052V203.173C27.2052 203.109 27.1785 203.05 27.125 202.997C27.0715 202.943 27.0128 202.917 26.9487 202.917H23.9679C23.9039 202.917 23.8451 202.943 23.7917 202.997C23.7382 203.05 23.7115 203.109 23.7115 203.173V204.664Z" fill="#525866"/>
</svg>
  </aside>`;
}

function sectionNav(activeSectionIdx) {
  return `
  <div class="sui-section-nav">
    <div class="sui-section-nav-group">
      <div class="sui-section-nav-label">MANDATORY</div>
      <ul class="sui-section-nav-list">
        ${NAV_SECTIONS.map((s, i) => `
          <li class="sui-section-nav-item${i === activeSectionIdx ? ' active' : ''}" data-nav-idx="${i}">
            ${i === activeSectionIdx ? `<span class="sui-nav-active-bar"></span>` : ''}
            <span class="sui-nav-item-text">${s.label.replace('\n', '<br>')}</span>
          </li>`).join('')}
      </ul>
    </div>
    <div class="sui-section-nav-group">
      <div class="sui-section-nav-label">CUSTOM</div>
      <button class="sui-add-section-btn">
        <span class="material-symbols-outlined">add</span> Add section
      </button>
    </div>
  </div>`;
}

function contentSectionCard(section, idx) {
  const paras = section.body.split('\n\n').filter(Boolean);
  return `
  <div class="sui-content-card" data-section-card="${idx}">
    <div class="sui-card-header">
      <div class="sui-card-header-left">
        <div class="sui-card-title-row">
          <div class="sui-checkbox"></div>
          <span class="sui-card-title">${section.title}</span>
          ${section.badge ? `<span class="sui-badge-warn"><span class="material-symbols-outlined" style="font-size:11px">warning</span> ${section.badge}</span>` : ''}
        </div>
        <div class="sui-card-date">${section.date}</div>
      </div>
      <div class="sui-card-header-right">
        <button class="sui-comment-icon-btn">${commentIconSvg(false, false)}</button>
        <button class="sui-icon-btn"><span class="material-symbols-outlined">content_copy</span></button>
        <button class="sui-icon-btn"><span class="material-symbols-outlined">refresh</span></button>
        <button class="sui-icon-btn"><span class="material-symbols-outlined">download</span></button>
        <button class="sui-edit-btn"><span class="material-symbols-outlined">edit</span> Edit</button>
      </div>
    </div>
    <div class="sui-card-tabs">
      <button class="sui-card-tab active" data-card-tab="output" data-card="${idx}">Output</button>
      <button class="sui-card-tab" data-card-tab="sources" data-card="${idx}">Sources <span class="sui-sources-count">3</span></button>
    </div>
    <div class="sui-card-body" data-card-body="${idx}">
      ${paras.map(p => `<p class="sui-para">${p}</p>`).join('')}
    </div>
  </div>`;
}

function addSectionBar() {
  return `
  <div class="sui-add-section-bar">
    <button class="sui-add-section-inline">
      Add section <span class="material-symbols-outlined">add</span>
    </button>
  </div>`;
}

function dealHeader() {
  return `
  <div class="sui-deal-header">
    <div class="sui-deal-header-top">
      <div class="sui-deal-header-left">
        <button class="sui-back-btn"><span class="material-symbols-outlined">chevron_right</span></button>
        <div class="sui-deal-header-title-row">
          <div class="sui-deal-logo">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="10" r="10" fill="#e8f4e8"/>
              <text x="10" y="14" text-anchor="middle" font-size="9" fill="#205b34" font-family="sans-serif" font-weight="700">M</text>
            </svg>
          </div>
          <span class="sui-deal-title">Medi Assist Healthcare Services Ltd</span>
          <a href="#" class="sui-activity-link">(See activity)</a>
        </div>
      </div>
      <div class="sui-deal-header-right">
        <button class="sui-comment-icon-btn">${commentIconSvg(true, true)}</button>
        <button class="sui-export-btn"><span class="material-symbols-outlined">download</span> Export</button>
        <button class="sui-icon-btn"><span class="material-symbols-outlined">more_vert</span></button>
      </div>
    </div>
    <div class="sui-deal-doc-tabs">
      <button class="sui-doc-tab active" data-doc="ic-research">
        <span class="material-symbols-outlined">description</span> IC Research note
      </button>
      <button class="sui-doc-tab" data-doc="ic-memo">
        <span class="material-symbols-outlined">slideshow</span> IC memo presentation
      </button>
      <button class="sui-doc-tab" data-doc="benchmarking">
        <span class="material-symbols-outlined">query_stats</span> Benchmarking report
      </button>
      <button class="sui-doc-tab" data-doc="checklist">
        <span class="material-symbols-outlined">checklist</span> Checklist
      </button>
    </div>
  </div>`;
}

function commentCard(c, i) {
  return `
  <div class="sui-comment-card${c.unread ? ' unread' : ''}" data-comment-idx="${i}">
    <div class="sui-comment-header">
      <div class="sui-comment-author">
        ${avatar(c.initials, c.avatarBg, c.avatarColor, 16)}
        <span class="sui-comment-author-name">${c.author}</span>
        ${c.unread ? `<span class="sui-unread-dot"></span>` : ''}
      </div>
      <div class="sui-comment-header-actions">
        <span class="sui-comment-action-icon sui-resolve-btn" data-tooltip="${c.resolved ? 'Mark as active' : 'Mark as resolved'}">
          ${c.resolved ? RESOLVED_ICON : RESOLVE_ICON}
        </span>
        <span class="sui-comment-kebab-wrapper">
          <span class="sui-comment-action-icon sui-kebab-btn">${KEBAB_ICON}</span>
          <div class="sui-comment-menu" style="display:none;">
            ${c.author === 'Raunak J' ? `
            <div class="sui-comment-menu-item"><span class="material-symbols-outlined" style="font-size:16px;color:var(--slate-600)">edit</span><span>Edit</span></div>
            <div class="sui-comment-menu-item sui-comment-menu-item--green"><span class="material-symbols-outlined" style="font-size:16px;color:var(--pine-700)">mark_chat_unread</span><span>Mark as unread</span></div>
            <div class="sui-comment-menu-item sui-comment-menu-item--red"><span class="material-symbols-outlined" style="font-size:16px;color:#d02533">delete</span><span>Delete</span></div>
            ` : `
            <div class="sui-comment-menu-item sui-comment-menu-item--green"><span class="material-symbols-outlined" style="font-size:16px;color:var(--pine-700)">${c.unread ? 'mark_chat_read' : 'mark_chat_unread'}</span><span>${c.unread ? 'Mark as read' : 'Mark as unread'}</span></div>
            `}
          </div>
        </span>
      </div>
    </div>
    <p class="sui-comment-text">${c.text}<span class="sui-show-more"> Show more</span></p>
    ${c.replies > 0 ? `<div class="sui-replies"><span class="material-symbols-outlined" style="font-size:14px;color:#1c4b2e">subdirectory_arrow_right</span><span>${c.replies} replies</span></div>` : ''}
    <div class="sui-comment-meta">
      <div class="sui-comment-meta-left">
        ${c.id ? `<span class="sui-comment-id">#${c.id}</span>` : ''}
        ${c.id && c.section ? `<span class="sui-meta-divider"></span>` : ''}
        ${c.section ? `<span class="sui-comment-section">${c.section}</span>` : ''}
      </div>
      ${c.date ? `<span class="sui-comment-date">${c.date}</span>` : ''}
    </div>
  </div>`;
}

const DUMMY_REPLIES = {
  50: [
    { author: 'Priyanka S', initials: 'PS', avatarBg: '#e0f8e7', avatarColor: '#205b34', date: "10 Jul '25", text: 'I agree with this' },
    { author: 'Raunak J', initials: 'RJ', avatarBg: '#dbeafe', avatarColor: '#1e3a8a', date: "10 Jul '25", text: 'Great, lets make updates on all the relevant documents please?' },
  ],
  49: [
    { author: 'Raunak J', initials: 'RJ', avatarBg: '#dbeafe', avatarColor: '#1e3a8a', date: "10 Jul '25", text: 'Good catch — will update the note to reflect the 2022 amendment.' },
  ],
  40: [
    { author: 'Priyanka S', initials: 'PS', avatarBg: '#e0f8e7', avatarColor: '#205b34', date: "9 Jul '25", text: 'Agreed — should we run a sensitivity on 3x and 5x as well for the IC?' },
    { author: 'Aman G', initials: 'AG', avatarBg: '#fde68a', avatarColor: '#78350f', date: "9 Jul '25", text: 'Will add to the financial analysis annexure.' },
  ],
};

const THREAD_LONG_TEXT = `Going forward, this trend will require close monitoring to ensure that net exposures, solvency ratios, and risk concentration levels remain within approved risk appetite limits, particularly in the event of adverse claims experience or a re-acceleration of growth in higher-risk segments.\n\nGoing forward, this trend will require close monitoring to ensure that net exposures, solvency ratios, and risk concentration levels remain within approved risk appetite limits, particularly in the event of adverse claims experience or a re-acceleration of growth in higher-risk segments.\n\n@@Priyanka S, Rohit P@@ please look into this.`;

function renderThreadText(text) {
  return text
    .replace(/@@(.+?)@@/g, '<span style="color:#205b34;font-weight:600">$1</span>')
    .replace(/\n\n/g, '</p><p class="sui-thread-text" style="margin-top:8px">');
}

function threadView(c) {
  const replies = DUMMY_REPLIES[c.id] || [];
  const rawText = DUMMY_REPLIES[c.id] ? THREAD_LONG_TEXT : c.text.replace('...', '').replace('Show more', '');
  const fullText = renderThreadText(rawText);

  return `
  <div class="sui-thread-view">
    <div class="sui-thread-header">
      <div class="sui-thread-back" id="sui-thread-back">
        <span class="material-symbols-outlined" style="font-size:18px;color:#fff">chevron_left</span>
        <span class="sui-thread-title">Threads</span>
      </div>
      <button class="sui-icon-btn-white" id="sui-thread-close"><span class="material-symbols-outlined" style="font-size:18px">close</span></button>
    </div>

    <div class="sui-thread-body">
      <!-- Main comment -->
      <div class="sui-thread-reply">
        <div class="sui-thread-reply-header">
          <div class="sui-thread-reply-author">
            ${avatar(c.initials, c.avatarBg, c.avatarColor, 24)}
            <span class="sui-comment-author-name">${c.author}</span>
          </div>
          <div style="display:flex;align-items:center;gap:4px">
            <span class="sui-comment-action-icon sui-resolve-btn" data-tooltip="${c.resolved ? 'Mark as active' : 'Mark as resolved'}">${c.resolved ? RESOLVED_ICON : RESOLVE_ICON}</span>
            <span class="sui-comment-action-icon sui-kebab-btn">${KEBAB_ICON}</span>
          </div>
        </div>
        <p class="sui-thread-text">${fullText}</p>
        <div class="sui-thread-reply-meta" style="margin-top:4px">
          ${c.id ? `<span class="sui-comment-id">#${c.id}</span><span class="sui-meta-divider"></span>` : ''}
          <span class="sui-comment-section" style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex:1">${c.section}</span>
          <span class="sui-comment-date" style="flex-shrink:0">${c.date}</span>
        </div>
      </div>

      <!-- Replies -->
      ${replies.length > 0 ? `
      <div class="sui-thread-all-replies">All replies (${replies.length})</div>
      ${replies.map(r => `
      <div class="sui-thread-reply">
        <div class="sui-thread-reply-header">
          <div class="sui-thread-reply-author">
            ${avatar(r.initials, r.avatarBg, r.avatarColor, 24)}
            <span class="sui-comment-author-name">${r.author}</span>
          </div>
          <div style="display:flex;align-items:center;gap:8px">
            <span class="sui-comment-date">${r.date}</span>
            ${r.author === 'Raunak J' ? `<span class="sui-comment-action-icon">${KEBAB_ICON}</span>` : ''}
          </div>
        </div>
        <p class="sui-thread-text">${r.text}</p>
      </div>`).join('')}
      ` : ''}
    </div>

    <!-- Compose footer -->
    <div class="sui-thread-compose">
      <span class="sui-thread-compose-placeholder">Add a comment</span>
      <div class="sui-thread-compose-actions">
        <span class="material-symbols-outlined" style="font-size:16px;color:var(--slate-500)">alternate_email</span>
        <span class="material-symbols-outlined" style="font-size:16px;color:var(--slate-300)">send</span>
      </div>
    </div>
  </div>`;
}

function commentsPanel() {
  return `
  <aside class="sui-comments-panel">
    <div class="sui-comments-header">
      <div class="sui-comments-title">
        <span class="material-symbols-outlined" style="font-size:18px">chat_bubble</span>
        <span>Comments</span>
        <span class="sui-comments-count">${COMMENTS.length}</span>
      </div>
      <div class="sui-comments-header-actions">
        <button class="sui-icon-btn-white"><span class="material-symbols-outlined" style="font-size:18px">more_vert</span></button>
        <div class="sui-divider-v"></div>
        <button class="sui-icon-btn-white"><span class="material-symbols-outlined" style="font-size:18px">close</span></button>
      </div>
    </div>
    <div class="sui-comments-filter-bar">
      <div class="sui-comments-search-row">
        <div class="sui-comments-search" id="sui-section-dropdown-trigger">
          <span class="sui-search-placeholder" id="sui-section-label">All</span>
          <span class="material-symbols-outlined sui-search-chevron">keyboard_arrow_down</span>
        </div>
        <div class="sui-section-dropdown" id="sui-section-dropdown" style="display:none;">
          <div class="sui-section-dropdown-item active" data-section="all">All</div>
          <div class="sui-section-dropdown-item" data-section="ic-general">IC note (General)</div>
          ${CONTENT_SECTIONS.map(s => `<div class="sui-section-dropdown-item" data-section="${s.id}">${s.title}</div>`).join('')}
        </div>
        <button class="sui-search-icon-btn"><div class="sui-search-icon-btn-inner"><span class="material-symbols-outlined">search</span></div></button>
      </div>
      <div class="sui-comments-filter-row">
        <div class="sui-filter-chips">
          <button class="sui-filter-chip active" data-filter="active">Active</button>
          <button class="sui-filter-chip inactive" data-filter="resolved">Resolved</button>
        </div>
        <div class="sui-filter-icons">
          <div class="sui-sort-wrapper">
            <button class="sui-filter-icon-btn sui-sort-btn" id="sui-sort-trigger">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.625 5.25H15.375V6.75H2.625V5.25ZM5.25 8.625H12.75V10.125H5.25V8.625ZM7.875 12H10.125V13.5H7.875V12Z" fill="#525866"/></svg>
            </button>
            <div class="sui-sort-dropdown" id="sui-sort-dropdown" style="display:none;">
              <div class="sui-sort-item active" data-sort="latest">Sort by date (Latest → Old)</div>
              <div class="sui-sort-item" data-sort="oldest">Sort by date (Old → Latest)</div>
              <div class="sui-sort-item" data-sort="unread">Sort by unread status</div>
            </div>
          </div>
          <button class="sui-filter-icon-btn"><span class="material-symbols-outlined">filter_alt</span></button>
        </div>
      </div>
    </div>
    <div class="sui-comments-list">
      ${COMMENTS.map((c, i) => commentCard(c, i)).join('')}
    </div>
    <div class="sui-comments-footer">
      <button class="sui-add-comment-btn">Add a new comment</button>
    </div>
  </aside>`;
}

function render(state) {
  return `
  <div class="sui-root">
    ${topNav()}
    <div class="sui-body">
      ${iconSidebar()}
      <div class="sui-main">
        ${dealHeader()}
        <div class="sui-content-area">
          ${sectionNav(state.activeSectionIdx)}
          <div class="sui-content-scroll">
            ${CONTENT_SECTIONS.map((s, i) => contentSectionCard(s, i)).join('')}
            ${addSectionBar()}
          </div>
        </div>
      </div>
      ${commentsPanel()}
    </div>
  </div>
  <button class="sui-fab hidden" id="sui-fab">
    <svg width="165" height="56" viewBox="0 0 165 56" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d_38_6589)"><path d="M4 26C4 12.7452 14.7452 2 28 2H137C150.255 2 161 12.7452 161 26C161 39.2548 150.255 50 137 50H28C14.7452 50 4 39.2548 4 26Z" fill="#205B34"/><path d="M28 3H137C149.703 3 160 13.2975 160 26C160 38.7025 149.703 49 137 49H28C15.2975 49 5 38.7025 5 26C5 13.2975 15.2975 3 28 3Z" stroke="#66A160" stroke-width="2"/><path d="M19.3462 26.6249V25.3749H23.9295V26.6249H19.3462ZM24.6666 23.5447L23.0449 21.9231L23.9231 21.0449L25.5447 22.6666L24.6666 23.5447ZM27.3749 21.9295V17.3462H28.6249V21.9295H27.3749ZM31.3333 23.5447L30.4551 22.6666L32.0768 21.0449L32.9549 21.9231L31.3333 23.5447ZM32.0704 26.6249V25.3749H36.6537V26.6249H32.0704ZM27.9999 28.0833C27.4177 28.0833 26.9249 27.8816 26.5216 27.4783C26.1183 27.0749 25.9166 26.5822 25.9166 25.9999C25.9166 25.4177 26.1183 24.9249 26.5216 24.5216C26.9249 24.1183 27.4177 23.9166 27.9999 23.9166C28.5822 23.9166 29.0749 24.1183 29.4783 24.5216C29.8816 24.9249 30.0833 25.4177 30.0833 25.9999C30.0833 26.5822 29.8816 27.0749 29.4783 27.4783C29.0749 27.8816 28.5822 28.0833 27.9999 28.0833ZM32.0768 30.9549L30.4551 29.3333L31.3333 28.4551L32.9549 30.0768L32.0768 30.9549ZM23.9231 30.9549L23.0449 30.0768L24.6666 28.4551L25.5447 29.3333L23.9231 30.9549ZM27.3749 34.6537V30.0704H28.6249V34.6537H27.3749Z" fill="white"/><path d="M51.008 32.224C50.1973 32.224 49.472 32.08 48.832 31.792C48.192 31.504 47.6853 31.072 47.312 30.496C46.9493 29.9093 46.768 29.1787 46.768 28.304V27.968H48.096V28.304C48.096 29.232 48.368 29.9253 48.912 30.384C49.456 30.832 50.1547 31.056 51.008 31.056C51.8827 31.056 52.5493 30.8587 53.008 30.464C53.4667 30.0693 53.696 29.5733 53.696 28.976C53.696 28.56 53.5893 28.2293 53.376 27.984C53.1733 27.7387 52.8853 27.5413 52.512 27.392C52.1387 27.232 51.7013 27.0933 51.2 26.976L50.368 26.768C49.7173 26.5973 49.1413 26.3893 48.64 26.144C48.1387 25.8987 47.744 25.5787 47.456 25.184C47.1787 24.7787 47.04 24.2613 47.04 23.632C47.04 23.0027 47.1947 22.4587 47.504 22C47.824 21.5413 48.2667 21.1893 48.832 20.944C49.408 20.6987 50.0693 20.576 50.816 20.576C51.5733 20.576 52.2507 20.7093 52.848 20.976C53.456 21.232 53.9307 21.616 54.272 22.128C54.624 22.6293 54.8 23.264 54.8 24.032V24.704H53.472V24.032C53.472 23.488 53.3547 23.0507 53.12 22.72C52.896 22.3893 52.5813 22.144 52.176 21.984C51.7813 21.824 51.328 21.744 50.816 21.744C50.08 21.744 49.488 21.9093 49.04 22.24C48.592 22.56 48.368 23.0187 48.368 23.616C48.368 24.0107 48.464 24.3307 48.656 24.576C48.848 24.8213 49.12 25.024 49.472 25.184C49.824 25.3333 50.2453 25.4667 50.736 25.584L51.568 25.792C52.2187 25.9307 52.8 26.1227 53.312 26.368C53.8347 26.6027 54.2507 26.928 54.56 27.344C54.8693 27.7493 55.024 28.2827 55.024 28.944C55.024 29.6053 54.8587 30.1813 54.528 30.672C54.1973 31.1627 53.728 31.5467 53.12 31.824C52.5227 32.0907 51.8187 32.224 51.008 32.224ZM57.3325 32V24.176H58.5645V25.152H58.7885C58.9378 24.8747 59.1832 24.6187 59.5245 24.384C59.8658 24.1493 60.3458 24.032 60.9645 24.032C61.5725 24.032 62.0632 24.1653 62.4365 24.432C62.8205 24.6987 63.0978 25.024 63.2685 25.408H63.4925C63.6738 25.024 63.9458 24.6987 64.3085 24.432C64.6818 24.1653 65.1992 24.032 65.8605 24.032C66.3832 24.032 66.8418 24.1387 67.2365 24.352C67.6312 24.5653 67.9405 24.8747 68.1645 25.28C68.3992 25.6747 68.5165 26.1493 68.5165 26.704V32H67.2525V26.816C67.2525 26.2933 67.0978 25.8827 66.7885 25.584C66.4898 25.2747 66.0685 25.12 65.5245 25.12C64.9485 25.12 64.4738 25.3067 64.1005 25.68C63.7378 26.0533 63.5565 26.592 63.5565 27.296V32H62.2925V26.816C62.2925 26.2933 62.1378 25.8827 61.8285 25.584C61.5298 25.2747 61.1085 25.12 60.5645 25.12C59.9885 25.12 59.5138 25.3067 59.1405 25.68C58.7778 26.0533 58.5965 26.592 58.5965 27.296V32H57.3325ZM73.6901 32.224C73.1461 32.224 72.6501 32.128 72.2021 31.936C71.7541 31.744 71.4021 31.4667 71.1461 31.104C70.8901 30.7413 70.7621 30.2987 70.7621 29.776C70.7621 29.2427 70.8901 28.8053 71.1461 28.464C71.4021 28.112 71.7541 27.8507 72.2021 27.68C72.6501 27.4987 73.1515 27.408 73.7061 27.408H76.3461V26.832C76.3461 26.2773 76.1808 25.84 75.8501 25.52C75.5301 25.2 75.0501 25.04 74.4101 25.04C73.7808 25.04 73.2901 25.1947 72.9381 25.504C72.5861 25.8027 72.3461 26.208 72.2181 26.72L71.0341 26.336C71.1621 25.8987 71.3648 25.504 71.6421 25.152C71.9195 24.7893 72.2875 24.5013 72.7461 24.288C73.2155 24.064 73.7755 23.952 74.4261 23.952C75.4288 23.952 76.2075 24.2133 76.7621 24.736C77.3168 25.248 77.5941 25.9733 77.5941 26.912V30.448C77.5941 30.768 77.7435 30.928 78.0421 30.928H78.7621V32H77.6581C77.3061 32 77.0235 31.904 76.8101 31.712C76.5968 31.5093 76.4901 31.2427 76.4901 30.912V30.832H76.2981C76.1808 31.0347 76.0208 31.248 75.8181 31.472C75.6261 31.6853 75.3595 31.8613 75.0181 32C74.6768 32.1493 74.2341 32.224 73.6901 32.224ZM73.8341 31.136C74.5808 31.136 75.1835 30.9173 75.6421 30.48C76.1115 30.032 76.3461 29.408 76.3461 28.608V28.432H73.7541C73.2528 28.432 72.8368 28.544 72.5061 28.768C72.1861 28.9813 72.0261 29.3067 72.0261 29.744C72.0261 30.1813 72.1915 30.5227 72.5221 30.768C72.8635 31.0133 73.3008 31.136 73.8341 31.136ZM80.6853 32V24.176H81.9173V25.136H82.1413C82.2799 24.7947 82.4933 24.544 82.7813 24.384C83.0693 24.224 83.4479 24.144 83.9173 24.144H84.8453V25.296H83.8373C83.2719 25.296 82.8133 25.456 82.4613 25.776C82.1199 26.0853 81.9493 26.5707 81.9493 27.232V32H80.6853ZM89.7885 32C89.3405 32 88.9938 31.8773 88.7485 31.632C88.5138 31.3867 88.3965 31.0507 88.3965 30.624V25.28H86.0445V24.176H88.3965V21.392H89.6605V24.176H92.2205V25.28H89.6605V30.432C89.6605 30.752 89.8152 30.912 90.1245 30.912H91.8685V32H89.7885ZM97.6301 32L101.086 20.8H103.454L106.91 32H105.518L104.654 29.168H99.8861L99.0221 32H97.6301ZM100.222 27.952H104.302L102.382 21.616H102.158L100.222 27.952ZM111.98 32.224C111.01 32.224 110.188 32 109.516 31.552C108.855 31.104 108.455 30.3947 108.316 29.424L109.516 29.152C109.602 29.664 109.762 30.0693 109.996 30.368C110.231 30.656 110.519 30.864 110.86 30.992C111.212 31.1093 111.586 31.168 111.98 31.168C112.567 31.168 113.031 31.0507 113.372 30.816C113.714 30.5813 113.884 30.2667 113.884 29.872C113.884 29.4667 113.719 29.184 113.388 29.024C113.068 28.8533 112.626 28.7147 112.06 28.608L111.404 28.496C110.903 28.4107 110.444 28.2773 110.028 28.096C109.612 27.9147 109.282 27.6693 109.036 27.36C108.791 27.0507 108.668 26.6613 108.668 26.192C108.668 25.488 108.94 24.9387 109.484 24.544C110.028 24.1493 110.748 23.952 111.644 23.952C112.53 23.952 113.244 24.1547 113.788 24.56C114.343 24.9547 114.7 25.5147 114.86 26.24L113.676 26.544C113.58 25.9787 113.351 25.584 112.988 25.36C112.626 25.1253 112.178 25.008 111.644 25.008C111.111 25.008 110.69 25.1093 110.38 25.312C110.071 25.504 109.916 25.792 109.916 26.176C109.916 26.5493 110.06 26.8267 110.348 27.008C110.647 27.1787 111.042 27.3067 111.532 27.392L112.188 27.504C112.743 27.6 113.239 27.7333 113.676 27.904C114.124 28.064 114.476 28.2987 114.732 28.608C114.999 28.9173 115.132 29.3227 115.132 29.824C115.132 30.592 114.844 31.184 114.268 31.6C113.703 32.016 112.94 32.224 111.98 32.224ZM120.61 32.224C119.639 32.224 118.818 32 118.146 31.552C117.484 31.104 117.084 30.3947 116.946 29.424L118.146 29.152C118.231 29.664 118.391 30.0693 118.626 30.368C118.86 30.656 119.148 30.864 119.49 30.992C119.842 31.1093 120.215 31.168 120.61 31.168C121.196 31.168 121.66 31.0507 122.002 30.816C122.343 30.5813 122.514 30.2667 122.514 29.872C122.514 29.4667 122.348 29.184 122.018 29.024C121.698 28.8533 121.255 28.7147 120.69 28.608L120.034 28.496C119.532 28.4107 119.074 28.2773 118.658 28.096C118.242 27.9147 117.911 27.6693 117.666 27.36C117.42 27.0507 117.298 26.6613 117.298 26.192C117.298 25.488 117.57 24.9387 118.114 24.544C118.658 24.1493 119.378 23.952 120.274 23.952C121.159 23.952 121.874 24.1547 122.418 24.56C122.972 24.9547 123.33 25.5147 123.49 26.24L122.306 26.544C122.21 25.9787 121.98 25.584 121.618 25.36C121.255 25.1253 120.807 25.008 120.274 25.008C119.74 25.008 119.319 25.1093 119.01 25.312C118.7 25.504 118.546 25.792 118.546 26.176C118.546 26.5493 118.69 26.8267 118.978 27.008C119.276 27.1787 119.671 27.3067 120.162 27.392L120.818 27.504C121.372 27.6 121.868 27.7333 122.306 27.904C122.754 28.064 123.106 28.2987 123.362 28.608C123.628 28.9173 123.762 29.3227 123.762 29.824C123.762 30.592 123.474 31.184 122.898 31.6C122.332 32.016 121.57 32.224 120.61 32.224ZM126.087 32V24.176H127.351V32H126.087ZM126.727 22.96C126.45 22.96 126.215 22.8693 126.023 22.688C125.842 22.5067 125.751 22.2773 125.751 22C125.751 21.712 125.842 21.4773 126.023 21.296C126.215 21.1147 126.45 21.024 126.727 21.024C127.005 21.024 127.234 21.1147 127.415 21.296C127.597 21.4773 127.687 21.712 127.687 22C127.687 22.2773 127.597 22.5067 127.415 22.688C127.234 22.8693 127.005 22.96 126.727 22.96ZM133.353 32.224C132.382 32.224 131.561 32 130.889 31.552C130.228 31.104 129.828 30.3947 129.689 29.424L130.889 29.152C130.974 29.664 131.134 30.0693 131.369 30.368C131.604 30.656 131.892 30.864 132.233 30.992C132.585 31.1093 132.958 31.168 133.353 31.168C133.94 31.168 134.404 31.0507 134.745 30.816C135.086 30.5813 135.257 30.2667 135.257 29.872C135.257 29.4667 135.092 29.184 134.761 29.024C134.441 28.8533 133.998 28.7147 133.433 28.608L132.777 28.496C132.276 28.4107 131.817 28.2773 131.401 28.096C130.985 27.9147 130.654 27.6693 130.409 27.36C130.164 27.0507 130.041 26.6613 130.041 26.192C130.041 25.488 130.313 24.9387 130.857 24.544C131.401 24.1493 132.121 23.952 133.017 23.952C133.902 23.952 134.617 24.1547 135.161 24.56C135.716 24.9547 136.073 25.5147 136.233 26.24L135.049 26.544C134.953 25.9787 134.724 25.584 134.361 25.36C133.998 25.1253 133.55 25.008 133.017 25.008C132.484 25.008 132.062 25.1093 131.753 25.312C131.444 25.504 131.289 25.792 131.289 26.176C131.289 26.5493 131.433 26.8267 131.721 27.008C132.02 27.1787 132.414 27.3067 132.905 27.392L133.561 27.504C134.116 27.6 134.612 27.7333 135.049 27.904C135.497 28.064 135.849 28.2987 136.105 28.608C136.372 28.9173 136.505 29.3227 136.505 29.824C136.505 30.592 136.217 31.184 135.641 31.6C135.076 32.016 134.313 32.224 133.353 32.224ZM141.539 32C141.091 32 140.744 31.8773 140.499 31.632C140.264 31.3867 140.147 31.0507 140.147 30.624V25.28H137.795V24.176H140.147V21.392H141.411V24.176H143.971V25.28H141.411V30.432C141.411 30.752 141.565 30.912 141.875 30.912H143.619V32H141.539Z" fill="white"/></g><defs><filter id="filter0_d_38_6589" x="0" y="0" width="165" height="56" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="2"/><feGaussianBlur stdDeviation="2"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_38_6589"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_38_6589" result="shape"/></filter></defs></svg>
  </button>`;
}

export function bind(root) {
  const state = { sidebarIdx: 0, activeSectionIdx: 0, activeDocTab: 'ic-research' };

  function update() {
    root.innerHTML = render(state);
    attachEvents();
  }

  function setActiveNav(idx) {
    root.querySelectorAll('.sui-section-nav-item').forEach(el => {
      el.classList.remove('active');
      const bar = el.querySelector('.sui-nav-active-bar');
      if (bar) bar.remove();
    });
    const active = root.querySelector(`.sui-section-nav-item[data-nav-idx="${idx}"]`);
    if (active) {
      active.classList.add('active');
      const bar = document.createElement('span');
      bar.className = 'sui-nav-active-bar';
      active.insertBefore(bar, active.firstChild);
    }
  }

  function showToast(message) {
    const existing = document.querySelector('.sui-toast');
    if (existing) existing.remove();
    const toast = document.createElement('div');
    toast.className = 'sui-toast';
    toast.innerHTML = `
      <span class="material-symbols-outlined" style="font-size:24px;color:#fff;flex-shrink:0">check_circle</span>
      <span class="sui-toast-text">${message}</span>
      <button class="sui-toast-close"><span class="material-symbols-outlined" style="font-size:20px;color:#fff">close</span></button>
      <div class="sui-toast-timer"></div>
    `;
    document.body.appendChild(toast);
    toast.querySelector('.sui-toast-close').addEventListener('click', () => toast.remove());
    setTimeout(() => toast.classList.add('sui-toast--visible'), 10);
    setTimeout(() => {
      toast.classList.remove('sui-toast--visible');
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }

  function showInlineMenu(e, type, c) {
    document.querySelectorAll('.sui-inline-menu').forEach(m => m.remove());
    const menu = document.createElement('div');
    menu.className = 'sui-comment-menu sui-inline-menu';
    menu.style.cssText = 'position:fixed;z-index:9000;display:flex;';
    if (type === 'own') {
      menu.innerHTML = `
        <div class="sui-comment-menu-item"><span class="material-symbols-outlined" style="font-size:16px;color:var(--slate-600)">edit</span><span>Edit</span></div>
        <div class="sui-comment-menu-item sui-comment-menu-item--green"><span class="material-symbols-outlined" style="font-size:16px;color:var(--pine-700)">mark_chat_unread</span><span>Mark as unread</span></div>
        <div class="sui-comment-menu-item sui-comment-menu-item--red"><span class="material-symbols-outlined" style="font-size:16px;color:#d02533">delete</span><span>Delete</span></div>`;
    } else if (type === 'reply') {
      menu.innerHTML = `
        <div class="sui-comment-menu-item"><span class="material-symbols-outlined" style="font-size:16px;color:var(--slate-600)">edit</span><span>Edit</span></div>
        <div class="sui-comment-menu-item sui-comment-menu-item--red"><span class="material-symbols-outlined" style="font-size:16px;color:#d02533">delete</span><span>Delete</span></div>`;
    } else {
      menu.innerHTML = `
        <div class="sui-comment-menu-item sui-comment-menu-item--green"><span class="material-symbols-outlined" style="font-size:16px;color:var(--pine-700)">${c?.unread ? 'mark_chat_read' : 'mark_chat_unread'}</span><span>${c?.unread ? 'Mark as read' : 'Mark as unread'}</span></div>`;
    }
    const rect = e.currentTarget.getBoundingClientRect();
    menu.style.top = (rect.bottom + 4) + 'px';
    menu.style.right = (window.innerWidth - rect.right) + 'px';
    document.body.appendChild(menu);
    setTimeout(() => document.addEventListener('click', () => menu.remove(), { once: true }), 10);
  }

  function openThread(c) {
    const panel = root.querySelector('.sui-comments-panel');
    panel.innerHTML = threadView(c);

    panel.querySelector('#sui-thread-back').addEventListener('click', () => update());
    panel.querySelector('#sui-thread-close').addEventListener('click', () => {
      panel.style.display = 'none';
      updateCommentIcons('none');
    });

    // Resolve button
    const resolveBtn = panel.querySelector('.sui-resolve-btn');
    if (resolveBtn) {
      resolveBtn.addEventListener('click', e => {
        e.stopPropagation();
        const idx = COMMENTS.findIndex(x => x.id === c.id);
        if (idx !== -1) {
          const resolved = COMMENTS.splice(idx, 1)[0];
          resolved.resolved = true;
          RESOLVED_COMMENTS.unshift(resolved);
          RESOLVED_COMMENTS.sort((a, b) => parseCommentDate(b.date) - parseCommentDate(a.date));
        }
        showToast('Comment has been resolved');
        update();
      });
    }

    // Main comment kebab
    const mainKebab = panel.querySelector('.sui-thread-reply .sui-kebab-btn');
    if (mainKebab) {
      mainKebab.addEventListener('click', e => {
        e.stopPropagation();
        showInlineMenu(e, c.author === 'Raunak J' ? 'own' : 'other', c);
      });
    }

    // Reply kebabs — only Edit + Delete (Raunak J's replies)
    panel.querySelectorAll('.sui-thread-all-replies ~ .sui-thread-reply .sui-comment-action-icon').forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation();
        showInlineMenu(e, 'reply', null);
      });
    });
  }

  function attachCardEvents(card, idx) {
    // Kebab toggle
    const kebabBtn = card.querySelector('.sui-kebab-btn');
    const menu = card.querySelector('.sui-comment-menu');
    if (kebabBtn && menu) {
      kebabBtn.addEventListener('click', e => {
        e.stopPropagation();
        const isOpen = menu.style.display !== 'none';
        root.querySelectorAll('.sui-comment-menu').forEach(m => m.style.display = 'none');
        root.querySelectorAll('.sui-kebab-btn').forEach(b => b.classList.remove('active'));
        if (!isOpen) {
          menu.style.display = 'flex';
          kebabBtn.classList.add('active');
        }
      });
    }
    // Mark as read/unread
    const markItem = card.querySelector('.sui-comment-menu-item--green');
    if (markItem) {
      markItem.addEventListener('click', e => {
        e.stopPropagation();
        const comment = COMMENTS[idx];
        if (!comment) return;
        comment.unread = !comment.unread;
        const tmp = document.createElement('div');
        tmp.innerHTML = commentCard(comment, idx);
        const newCard = tmp.firstElementChild;
        card.replaceWith(newCard);
        attachCardEvents(newCard, idx);
      });
    }
    // Resolve button
    const resolveBtn = card.querySelector('.sui-resolve-btn');
    if (resolveBtn) {
      resolveBtn.addEventListener('click', e => {
        e.stopPropagation();
        card.style.transition = 'opacity 0.2s, max-height 0.25s';
        card.style.overflow = 'hidden';
        card.style.maxHeight = card.offsetHeight + 'px';
        requestAnimationFrame(() => {
          card.style.opacity = '0';
          card.style.maxHeight = '0';
          card.style.padding = '0';
        });
        setTimeout(() => {
          const commentIdx = +card.dataset.commentIdx;
          const resolved = COMMENTS.splice(commentIdx, 1)[0];
          if (resolved) { resolved.resolved = true; RESOLVED_COMMENTS.unshift(resolved); RESOLVED_COMMENTS.sort((a, b) => parseCommentDate(b.date) - parseCommentDate(a.date)); }
          card.remove();
          const badge = root.querySelector('.sui-comments-count');
          if (badge) badge.textContent = COMMENTS.length;
          showToast('Comment has been resolved');
        }, 250);
      });
    }

    // Show more toggle
    const showMore = card.querySelector('.sui-show-more');
    if (showMore) {
      showMore.addEventListener('click', e => {
        e.stopPropagation();
        const p = showMore.closest('.sui-comment-text');
        const isExpanded = p.classList.toggle('expanded');
        showMore.textContent = isExpanded ? ' Show less' : ' Show more';
      });
    }

    // Click anywhere on card opens thread
    card.addEventListener('click', () => {
      const comment = COMMENTS[idx] || RESOLVED_COMMENTS[idx];
      if (comment) openThread(comment);
    });
  }

  function attachEvents() {
    // Top nav tabs
    root.querySelectorAll('.sui-tab-pill').forEach(btn => {
      btn.addEventListener('click', () => {
        root.querySelectorAll('.sui-tab-pill').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });

    // Kebab menu toggle on comment cards
    root.querySelectorAll('.sui-kebab-btn').forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation();
        const menu = btn.nextElementSibling;
        const isOpen = menu.style.display !== 'none';
        root.querySelectorAll('.sui-comment-menu').forEach(m => m.style.display = 'none');
        root.querySelectorAll('.sui-kebab-btn').forEach(b => b.classList.remove('active'));
        if (!isOpen) {
          menu.style.display = 'flex';
          btn.classList.add('active');
        }
      });
    });

    // Mark as read / unread
    root.querySelectorAll('.sui-comment-menu-item--green').forEach(item => {
      item.addEventListener('click', e => {
        e.stopPropagation();
        const card = item.closest('.sui-comment-card');
        const idx = +card.dataset.commentIdx;
        const comment = COMMENTS[idx];
        if (!comment) return;
        comment.unread = !comment.unread;
        // Re-render just this card
        const tmp = document.createElement('div');
        tmp.innerHTML = commentCard(comment, idx);
        const newCard = tmp.firstElementChild;
        card.replaceWith(newCard);
        // Attach events only on the new card
        attachCardEvents(newCard, idx);
      });
    });

    // Close menus on outside click
    document.addEventListener('click', () => {
      root.querySelectorAll('.sui-comment-menu').forEach(m => m.style.display = 'none');
      root.querySelectorAll('.sui-kebab-btn').forEach(b => b.classList.remove('active'));
    });

    // Sidebar icons
    root.querySelectorAll('.sui-sidebar-icon-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        state.sidebarIdx = +btn.dataset.sidebarIdx;
        update();
      });
    });

    // Attach card-level events for all comment cards
    root.querySelectorAll('.sui-comment-card').forEach(card => {
      attachCardEvents(card, +card.dataset.commentIdx);
    });

    // Global tooltip singleton — use event delegation so it works on dynamically rendered cards
    if (!document.querySelector('.sui-tooltip-global')) {
      const tooltipEl = document.createElement('div');
      tooltipEl.className = 'sui-tooltip-global';
      document.body.appendChild(tooltipEl);

      document.addEventListener('mouseover', e => {
        const btn = e.target.closest('[data-tooltip]');
        if (!btn) return;
        const text = btn.dataset.tooltip;
        tooltipEl.textContent = text;
        tooltipEl.className = 'sui-tooltip-global';
        tooltipEl.style.top = '-9999px';
        tooltipEl.style.left = '-9999px';
        tooltipEl.style.visibility = 'visible';

        const btnRect = btn.getBoundingClientRect();
        const tW = tooltipEl.offsetWidth;
        const tH = tooltipEl.offsetHeight;

        let left = btnRect.left + btnRect.width / 2 - tW / 2;
        const clampedLeft = Math.max(8, Math.min(left, window.innerWidth - tW - 8));
        const arrowLeft = (btnRect.left + btnRect.width / 2) - clampedLeft;
        tooltipEl.style.setProperty('--arrow-left', arrowLeft + 'px');

        let top = btnRect.top - tH - 8;
        if (top < 8) {
          top = btnRect.bottom + 8;
          tooltipEl.classList.add('below');
        } else {
          tooltipEl.classList.add('above');
        }

        tooltipEl.style.top = top + 'px';
        tooltipEl.style.left = clampedLeft + 'px';
        tooltipEl.classList.add('visible');
      });

      document.addEventListener('mouseout', e => {
        const btn = e.target.closest('[data-tooltip]');
        if (!btn) return;
        const tooltipEl = document.querySelector('.sui-tooltip-global');
        if (tooltipEl) tooltipEl.classList.remove('visible', 'above', 'below');
      });
    }

    // Section nav — click
    root.querySelectorAll('.sui-section-nav-item').forEach(item => {
      item.addEventListener('click', () => {
        const idx = +item.dataset.navIdx;
        state.activeSectionIdx = idx;
        setActiveNav(idx);
        const card = root.querySelector(`.sui-content-card[data-section-card="${idx}"]`);
        if (card) card.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });

    // Section nav — scroll tracking via IntersectionObserver
    const scrollEl = root.querySelector('.sui-content-scroll');
    if (scrollEl) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const idx = +entry.target.dataset.sectionCard;
            if (!isNaN(idx)) {
              state.activeSectionIdx = idx;
              setActiveNav(idx);
            }
          }
        });
      }, { root: scrollEl, threshold: 0.3 });

      root.querySelectorAll('.sui-content-card[data-section-card]').forEach(card => {
        observer.observe(card);
      });
    }

    // Section dropdown
    const dropdownTrigger = root.querySelector('#sui-section-dropdown-trigger');
    const dropdown = root.querySelector('#sui-section-dropdown');
    const sectionLabel = root.querySelector('#sui-section-label');

    // Which sections have unread comments
    const sectionsWithUnread = new Set(
      COMMENTS.filter(c => c.unread).map(c => {
        const sec = CONTENT_SECTIONS.find(s => s.title === c.section);
        return sec ? sec.id : null;
      }).filter(Boolean)
    );
    const dealHasUnread = COMMENTS.some(c => c.unread);

    function updateCommentIcons(selectedSection) {
      const dealIcon = root.querySelector('.sui-deal-header .sui-comment-icon-btn');
      const isDealLevel = selectedSection === 'all' || selectedSection === 'ic-general';
      if (dealIcon) dealIcon.innerHTML = commentIconSvg(selectedSection !== 'none' && isDealLevel, dealHasUnread);
      CONTENT_SECTIONS.forEach((sec, idx) => {
        const btn = root.querySelector(`.sui-content-card[data-section-card="${idx}"] .sui-comment-icon-btn`);
        if (btn) btn.innerHTML = commentIconSvg(selectedSection === sec.id, sectionsWithUnread.has(sec.id));
      });
    }

    function renderCommentsList(sectionId) {
      const filtered = sectionId === 'all'
        ? COMMENTS
        : sectionId === 'ic-general'
        ? COMMENTS.filter(c => c.section === 'IC note (General)')
        : COMMENTS.filter(c => {
            const sec = CONTENT_SECTIONS.find(s => s.id === sectionId);
            return sec && c.section === sec.title;
          });
      const list = root.querySelector('.sui-comments-list');
      if (list) list.innerHTML = filtered.map((c, i) => commentCard(c, i)).join('');
      // Update count badge
      const badge = root.querySelector('.sui-comments-count');
      if (badge) badge.textContent = filtered.length;
    }

    function selectSection(sectionId, label) {
      sectionLabel.textContent = label;
      dropdown.querySelectorAll('.sui-section-dropdown-item').forEach(el => {
        el.classList.toggle('active', el.dataset.section === sectionId);
      });
      updateCommentIcons(sectionId);
      renderCommentsList(sectionId);
      // Scroll to the section card if a specific section is selected
      if (sectionId !== 'all' && sectionId !== 'ic-general') {
        const idx = CONTENT_SECTIONS.findIndex(s => s.id === sectionId);
        if (idx !== -1) {
          const card = root.querySelector(`.sui-content-card[data-section-card="${idx}"]`);
          if (card) card.scrollIntoView({ behavior: 'smooth', block: 'start' });
          setActiveNav(idx);
        }
      }
    }

    const panel = root.querySelector('.sui-comments-panel');
    const fab = root.querySelector('#sui-fab') || document.querySelector('#sui-fab');
    let activeCommentSection = 'all';

    function showPanel() {
      panel.style.display = 'flex';
      requestAnimationFrame(() => panel.classList.remove('sui-panel-hidden'));
      if (fab) fab.classList.add('hidden');
    }

    function hidePanel() {
      panel.classList.add('sui-panel-hidden');
      setTimeout(() => panel.style.display = 'none', 200);
      updateCommentIcons('none');
      activeCommentSection = 'none';
      if (fab) fab.classList.remove('hidden');
    }

    function togglePanel(sectionId, label) {
      if (panel.style.display === 'none') {
        showPanel();
        selectSection(sectionId, label);
        activeCommentSection = sectionId;
      } else if (activeCommentSection === sectionId) {
        hidePanel();
      } else {
        selectSection(sectionId, label);
        activeCommentSection = sectionId;
      }
    }

    // FAB click — reopen panel
    if (fab) {
      fab.addEventListener('click', () => {
        showPanel();
        selectSection('all', 'All');
        activeCommentSection = 'all';
      });
    }

    // Close button in panel header
    const closeBtn = root.querySelector('.sui-comments-panel .sui-icon-btn-white:last-child');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => hidePanel());
    }

    // Deal header comment icon click
    const dealCommentBtn = root.querySelector('.sui-deal-header .sui-comment-icon-btn');
    if (dealCommentBtn) {
      dealCommentBtn.addEventListener('click', () => togglePanel('all', 'All'));
    }

    // Section card comment icon clicks
    CONTENT_SECTIONS.forEach((sec, idx) => {
      const btn = root.querySelector(`.sui-content-card[data-section-card="${idx}"] .sui-comment-icon-btn`);
      if (btn) btn.addEventListener('click', () => togglePanel(sec.id, sec.title));
    });

    if (dropdownTrigger && dropdown) {
      dropdownTrigger.addEventListener('click', e => {
        e.stopPropagation();
        dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
      });

      dropdown.querySelectorAll('.sui-section-dropdown-item').forEach(item => {
        item.addEventListener('click', () => {
          selectSection(item.dataset.section, item.textContent);
          dropdown.style.display = 'none';
        });
      });

      document.addEventListener('click', () => { dropdown.style.display = 'none'; }, { once: false });
    }

    // Sort dropdown
    const sortTrigger = root.querySelector('#sui-sort-trigger');
    const sortDropdown = root.querySelector('#sui-sort-dropdown');

    if (sortTrigger && sortDropdown) {
      sortTrigger.addEventListener('click', e => {
        e.stopPropagation();
        const isOpen = sortDropdown.style.display !== 'none';
        sortDropdown.style.display = isOpen ? 'none' : 'flex';
        sortTrigger.classList.toggle('active', !isOpen);
      });

      sortDropdown.querySelectorAll('.sui-sort-item').forEach(item => {
        item.addEventListener('click', e => {
          e.stopPropagation();
          sortDropdown.querySelectorAll('.sui-sort-item').forEach(i => i.classList.remove('active'));
          item.classList.add('active');
          sortDropdown.style.display = 'none';
          sortTrigger.classList.remove('active');

          const sort = item.dataset.sort;
          const list = root.querySelector('.sui-comments-list');
          const currentSection = root.querySelector('#sui-section-label')?.textContent;
          const secId = currentSection === 'All' ? 'all' : currentSection === 'IC note (General)' ? 'ic-general' : (CONTENT_SECTIONS.find(s => s.title === currentSection)?.id || 'all');

          let filtered = secId === 'all' ? [...COMMENTS]
            : secId === 'ic-general' ? COMMENTS.filter(c => c.section === 'IC note (General)')
            : COMMENTS.filter(c => { const sec = CONTENT_SECTIONS.find(s => s.id === secId); return sec && c.section === sec.title; });

          if (sort === 'latest') filtered.sort((a, b) => parseCommentDate(b.date) - parseCommentDate(a.date));
          else if (sort === 'oldest') filtered.sort((a, b) => parseCommentDate(a.date) - parseCommentDate(b.date));
          else if (sort === 'unread') filtered.sort((a, b) => (b.unread ? 1 : 0) - (a.unread ? 1 : 0));

          list.innerHTML = filtered.map((c, i) => commentCard(c, i)).join('');
          list.querySelectorAll('.sui-comment-card').forEach(card => attachCardEvents(card, +card.dataset.commentIdx));
        });
      });

      document.addEventListener('click', () => {
        sortDropdown.style.display = 'none';
        sortTrigger?.classList.remove('active');
      });
    }

    // Doc tabs
    root.querySelectorAll('.sui-doc-tab').forEach(btn => {
      btn.addEventListener('click', () => {
        root.querySelectorAll('.sui-doc-tab').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });

    // Card tabs (Output / Sources)
    root.querySelectorAll('.sui-card-tab').forEach(btn => {
      btn.addEventListener('click', () => {
        const cardIdx = btn.dataset.card;
        root.querySelectorAll(`.sui-card-tab[data-card="${cardIdx}"]`).forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });

    // Comment filter chips — Active / Resolved
    root.querySelectorAll('.sui-filter-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        root.querySelectorAll('.sui-filter-chip').forEach(c => {
          c.classList.remove('active');
          c.classList.add('inactive');
        });
        chip.classList.remove('inactive');
        chip.classList.add('active');

        const filter = chip.dataset.filter;
        const list = root.querySelector('.sui-comments-list');
        const badge = root.querySelector('.sui-comments-count');

        if (filter === 'resolved') {
          list.innerHTML = RESOLVED_COMMENTS.map((c, i) => commentCard(c, i)).join('');
          if (badge) badge.textContent = RESOLVED_COMMENTS.length;
          list.querySelectorAll('.sui-comment-card').forEach(card => {
            attachCardEvents(card, +card.dataset.commentIdx);
          });
        } else {
          const currentSection = root.querySelector('#sui-section-label')?.textContent;
          const secId = currentSection === 'All' ? 'all' : (CONTENT_SECTIONS.find(s => s.title === currentSection)?.id || 'all');
          renderCommentsList(secId);
          if (badge) badge.textContent = COMMENTS.length;
          list.querySelectorAll('.sui-comment-card').forEach(card => {
            attachCardEvents(card, +card.dataset.commentIdx);
          });
        }
      });
    });

    // Show more (expand comment)
    root.querySelectorAll('.sui-show-more').forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation();
        // Toggle truncation on parent paragraph
        const p = btn.closest('.sui-comment-text');
        p.classList.toggle('expanded');
        btn.textContent = p.classList.contains('expanded') ? 'Show less' : 'Show more';
      });
    });
  }

  update();
}
