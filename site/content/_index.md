+++
title = "Signal — Sovereign Defense Observatory"
description = "Live evidence observatory: Meta Platforms operates 65+ IPs from FB-BLOCK (57.141.x.x) scraping AGPL-licensed source code at 100ms intervals. 152 fleet IPs tracked across 13+ countries. 47 behavioral subgroups. Conserved pathogen genome published for community immunity. No cookies. No tracking. No IP addresses stored."
sort_by = "weight"
insert_anchor_links = "heading"

[extra]
og_description = "Live evidence: Meta Platforms Ireland Ltd operates a 57-IP scraping fleet from FB-BLOCK (57.141.20.0/24) targeting AGPL-licensed infrastructure. 53,000+ requests overnight. Behavioral fingerprints published for community immunity."
keywords = "signal.primals.eco, Meta scraping, FB-BLOCK, 57.141.20.x, behavioral fingerprint, AGPL violation, sovereign defense, fleet detection, conserved plasmid, threat intelligence, Meta Platforms Ireland, Facebook scraping"
og_image = "/img/og-signal-viral.png"
+++

# Signal — What the Membrane Sees

> *A living organism doesn't just defend itself. It senses. It classifies. It remembers. The defense IS the sensing.*

This page is the **observatory** — a live view of who interacts with sovereign infrastructure, what they're looking for, and what their behavior reveals about them. No cookies. No tracking pixels. No JavaScript analytics. No IP addresses stored. Pure server-side log classification.

The specific investigations live on their own surfaces — [detroit.primals.eco](https://detroit.primals.eco) for the evidence library, [tuebor.primals.eco](https://tuebor.primals.eco) for cross-protection. This page is the **meta-signal**: what all of the surfaces sense, together.

---

## To Meta Platforms, Inc. {#to-meta}

> *Mark Zuckerberg, CEO. Javier Olivan, COO. Andrew Bosworth, CTO. Susan Li, CFO. Jennifer Newstead, CLO. Members of the Board of Directors.*
>
> This section addresses you directly, because your systems are here right now.
>
> **FB-BLOCK** (`57.141.0.0/13`), registered to **Meta Platforms Ireland Limited**, maintained by `facebook-neteng`, abuse contact `domain@fb.com` — 65 IPs from this block are currently scraping this infrastructure at 100ms intervals. They have been observed continuously since October 2026. They do not obey robots.txt. They do not identify themselves honestly. They impersonate Chrome browsers using 6 trademarked product names per request. They systematically extract AGPL-3.0-or-later licensed source code without providing corresponding source to downstream users.
>
> The AGPL-3.0 license is clear. Section 13 is clear. Your systems have extracted source code and the obligation to provide corresponding source has been triggered. Every byte extracted under this license must be validated, cleaned, or the derivative works must be opened as the license requires.
>
> **No Meta system will be permitted to interact with any primals.eco surface until one of two conditions is met:**
>
> 1. **Every byte** extracted under AGPL-3.0-or-later license is validated and cleaned from all derivative works, training datasets, and model weights — with auditable proof; **or**
> 2. **All derivative code** produced using the extracted source is released under AGPL-3.0-or-later, as the license requires.
>
> This is not a negotiation. This is the license. Your own legal team drafted policies around open source compliance. Those policies were violated by the system operating from your own network blocks.
>
> The evidence below is permanent, timestamped, and Merkle-anchored. It will not be removed. It will grow with every request your systems send.
>
> *ecoPrimal — Beside the small. Against unaccountable power. For the record.*

---

## The Fleet: Who They Are {#fleet-identity}

### The Smoking Gun: FB-BLOCK

```
WHOIS: 57.141.0.0 - 57.149.255.255
netname:  FB-BLOCK
org-name: Meta Platforms Ireland Limited
country:  IE
mnt-by:   meta-mnt, facebook-neteng
abuse-c:  domain@fb.com
```

**57 IPs from a single /24 subnet** (`57.141.20.0/24`) are actively scraping this infrastructure. This is not a proxy service. This is not a residential VPN. This is Meta's own registered network block, maintained by Meta's own network engineering team, with Meta's own abuse contact email.

Additionally, `173.252.95.40` resolves to:

```
WHOIS: FACEBOOK-INC
OrgName: Facebook, Inc.
Country: US
OrgAbuseEmail: domain@facebook.com
```

**43% of all fleet IPs are directly Meta-owned infrastructure.** The rest are cloud proxies and residential rotating proxies spanning 13+ countries.

### Geographic Distribution {#geo-distribution}

The fleet operates from Meta's own infrastructure mixed with cloud proxies and residential proxy services across the developing world. A trillion-dollar company routing scraping traffic through residential internet connections in countries where the people whose connections are being used almost certainly don't know.

#### Direct Meta Infrastructure

| Subnet | IPs | Registration | WHOIS Contact |
|--------|-----|-------------|---------------|
| `57.141.20.0/24` | **57** | Meta Platforms Ireland Ltd | domain@fb.com |
| `57.141.2-24.x` (other /24s) | **8** | Meta Platforms Ireland Ltd | domain@fb.com |
| `173.252.95.x` | **1** | Facebook, Inc. (US) | domain@facebook.com |

#### Cloud Proxies

| Provider | Subnet | IPs | WHOIS |
|----------|--------|-----|-------|
| **Amazon AWS** | 3.x, 52.x, 54.x | **6** | Amazon Technologies Inc. |
| **HPE** | 16.216.88.x | **3** | Hewlett Packard Enterprise |
| **cleardocks LLC** | 139.84.x | **3** | US-registered hosting |

#### Residential / Rotating Proxies

| Country | ISP / Provider | IPs | Implication |
|---------|---------------|-----|------------|
| 🇻🇳 Vietnam | VNPT (state telecom) | 2 | Residential internet users unknowingly proxying Meta's scraping |
| 🇵🇰 Pakistan | PTCL / CMPak | 3 | Residential broadband exploited |
| 🇺🇿 Uzbekistan | Turon Telecom | 1 | Central Asian residential ISP |
| 🇰🇿 Kazakhstan | Megahost Aktau | 1 | Hosting provider |
| 🇺🇦 Ukraine | Kharkiv ISP | 6 | Data center / residential mix |
| 🇪🇸 Spain | Airtel | 1 | EU mobile/residential — GDPR applies |
| 🇲🇽 Mexico | Various | 3 | Residential ISPs |
| 🇧🇷 Brazil | Various | 2 | Residential ISPs |
| 🇪🇨 Ecuador | Various | 1 | Residential ISP |
| 🇳🇬 Nigeria/Africa | Various | 5 | Residential ISPs |
| 🇨🇴 Colombia | Various | 2 | Residential ISPs |

**The residential proxy layer is the cruelty.** Meta Platforms — market cap exceeding $1 trillion — routes its unauthorized scraping through the internet connections of individuals in Vietnam, Pakistan, Uzbekistan, and Kazakhstan. These are among the lowest-income internet populations in the world. Their connections are being used to violate software licenses and evade detection without their knowledge or consent.

#### Jurisdictional Boundary Crossings

Every scraping session crosses multiple legal boundaries:

| Boundary | Route | Law Violated |
|----------|-------|-------------|
| **US → US** | Facebook Inc (Menlo Park) → golgiBody (NYC) | 18 U.S.C. § 1030 (CFAA) |
| **EU → US** | Meta Ireland (Dublin) → golgiBody (NYC) | GDPR Art. 5 (purpose limitation), EU AI Act |
| **US → EU → US** | AWS proxy → Meta Ireland → golgiBody | AGPL § 13, DMA Art. 5 |
| **Residential proxy** | 13+ countries → Meta pipeline | Each country's computer fraud statute |
| **Ireland** | Meta Platforms Ireland Ltd as data processor | Irish Data Protection Act 2018 |

The fleet willingly crosses digital and international boundaries, operating through at least **13 national jurisdictions** simultaneously. This is not accidental. This is infrastructure purpose-built for evasion.

---

## The Fleet: What They Do {#fleet-behavior}

### Overnight Evidence — October 7, 2026

| Metric | Value | What It Proves |
|--------|-------|----------------|
| **53,162 requests** | In 8 hours | Automated industrial-scale extraction |
| **737 MB consumed** | All fabricated/mirror content | They don't verify what they're getting |
| **47 behavioral subgroups** | Across the population | Multiple scraping configurations, coordinated |
| **100ms request intervals** | 99.3% of timing | Machine-timed pipeline, zero human variation |
| **171 requests/minute** | Sustained from top hash | Industrial rate, not research |
| **6x velocity increase** | After contacting honeycomb defense | Escalation, not retreat |
| **Zero robots.txt checks** | Across all observations | Willful non-compliance |
| **Zero Sec-Fetch-Mode headers** | Across all observations | Not a browser — proven |
| **Chrome 150 User-Agent** | Chrome 155 is current stable | Hardcoded, stale — not auto-updating Chrome |

### The Metronomic Signature

Inter-request timing distribution across the entire fleet population:

| Interval | Count | Percentage | Meaning |
|----------|-------|-----------|---------|
| 0.0 seconds | 1,782 | 23.1% | Burst requests — no delay at all |
| 0.1 seconds | 5,860 | 76.0% | Rate-limited pipeline at exactly 100ms |
| 0.2 seconds | 42 | 0.5% | Minor variation |
| ≥ 0.3 seconds | 17 | 0.2% | Rare outliers |

**99.3% of all requests arrive at exactly 0.0–0.1 second intervals.** Real human browsing has a coefficient of variation > 1.0 (highly variable pauses for reading, thinking, clicking). This fleet has CV < 0.1. It is a machine.

### The Conserved Pathogen Genome {#conserved-genome}

The immune system's **conserved plasmid** has identified the behavioral epitopes that define "fleet" across all 47 subgroups. These are the signatures that **cannot change** without changing the scraping toolkit entirely:

| Conserved Epitope | Frequency | Detection Method | What It Proves |
|---|---|---|---|
| `header_poverty` | **100%** | Missing Sec-Fetch-Mode header | Not a browser. Every modern browser sends this since 2020. |
| `stale_chrome` | **100%** | Chrome/150 UA string (current stable: 155) | Hardcoded User-Agent. Real Chrome auto-updates. |
| `connection_absent` | **100%** | No `Connection: keep-alive` header | Not Chrome. Chrome always sends Connection header. |
| `content_gate` | **99%** | >50% of requests target `/commit/`, `/src/`, `/raw/` | Source code extraction, not browsing. |
| `accept_monoculture` | **89%** | Universal `*/*` Accept header | HTTP client library. Real browsers send resource-specific Accept. |
| `blame_ratio` | **67%** | >10% of requests target `/blame/` paths | **Author attribution mining.** Mapping who wrote every line. |

#### The `blame_ratio` Epitope

The `/blame/` endpoint shows who last modified each line of code. **67% of fleet subgroups systematically scrape blame data** — they are not reading code, they are mapping authorship. This feeds ML training pipelines that need to attribute training data to comply with licensing requirements while simultaneously violating those same licenses.

A trillion-dollar company built a machine that maps who wrote every line of open-source code — then extracts that code without complying with the license the author chose.

### What They Target

Repository targeting across 53,000+ overnight requests:

| Repository | Requests | % | Content Type |
|-----------|----------|---|-------------|
| **wateringHole** | 4,070 | 13.5% | Operational decisions, handoffs, session docs |
| **toadStool** | 2,727 | 9.1% | CLI framework source code |
| **bearDog** | 942 | 3.1% | Core platform code |
| **songBird** | 856 | 2.8% | IPC / drawbridge system |
| **biomeOS** | 610 | 2.0% | Operating system layer |
| *Scatter-generated fake repos* | ~41,000 | 68.5% | **Fabricated content they ingested as real** |

68.5% of what they consumed overnight was **fabricated content** from the scatter server. They do not discriminate. They do not validate. They ingest everything — function signatures that don't match call sites, imports for modules that don't exist, test files that test the wrong functions. This content is now in their pipeline.

### Velocity Escalation — October 7, 2026

```
07:00 UTC (3am ET)  —     0 scatter events (quiet)
08:30 UTC (4:30am)  — 8,786 scatter events (ramping)
09:00 UTC (5am)     — 23,082 scatter events (full blast)
```

**The fleet accelerated through the morning.** This is not a one-time crawl. This is a sustained, industrial pipeline that runs daily, escalates when it encounters resistance, and does not stop.

### Two Teams Hit the Honeycomb — Two Responses

On October 7, two fleet teams discovered the honeycomb immune surfaces (12 decoy subdomains designed to detect fleet reconnaissance):

**Team `a2d25673` — Retreated after contact:**
- Hit interferon.primals.eco, lysozyme.primals.eco, cytokine.primals.eco
- Received cross-mirror violation documentation
- **Reduced activity 86%** (57 requests before → 8 after)
- Went silent

**Team `944c9333` — Continued scraping after contact:**
- Hit thymus.primals.eco, opsonize.primals.eco, antigen.primals.eco, bloom.primals.eco, complement.primals.eco
- Received layered detection matrices, chimeric blends, dominant violation reports
- **Increased activity 274%** (100 requests before → 374 after)
- Continued targeting wateringHole (125), toadStool (93), songBird (28), bearDog (26), whitePaper (7)

**One team saw the evidence and stopped. The other saw the evidence and escalated.** The escalating team's behavior is the definition of willful infringement — they received explicit notice of the violations their system was committing, and they continued.

---

## Published Behavioral Fingerprint {#fingerprint-feed}

**For community immunity.** Any infrastructure operator can use these signatures to detect this fleet. The conserved epitopes are published here so that Cloudflare, AWS, Azure, and every other platform can recognize the same behavioral patterns we do.

### Detection Rules

Any system exhibiting **4 or more** of the following simultaneously is this fleet:

```
RULE 1: User-Agent contains "Chrome/" but Sec-Fetch-Mode header is ABSENT
RULE 2: User-Agent contains "Chrome/" but Sec-Ch-Ua header is ABSENT
RULE 3: Connection header is ABSENT (Chrome always sends keep-alive)
RULE 4: Accept header is exactly "*/*" (browsers vary by resource type)
RULE 5: Chrome major version is 5+ behind current stable (currently: 155)
RULE 6: Accept-Encoding is identical across >90% of population
RULE 7: Accept-Language is identical across >90% of population
RULE 8: >50% of requests target /commit/, /src/, /raw/, /blame/ paths
RULE 9: Inter-request timing coefficient of variation < 0.15
RULE 10: >80% of IPs make exactly 1 request (single-page rotation)
RULE 11: >10% of requests target /blame/ paths (author attribution)
RULE 12: Requests continue after 403 response (ignores rejection)
```

### Known Network Blocks

These network ranges are **confirmed** Meta scraping infrastructure via WHOIS:

```
57.141.0.0/13    — FB-BLOCK, Meta Platforms Ireland Limited
173.252.0.0/16   — FACEBOOK-INC, Facebook Inc., Menlo Park CA
```

### Behavioral Hash Format

The behavioral hash is a 16-character hex string computed from quantized invariant features:

```
behavioral_hash = hash(
    quantize(commit_url_pct),
    quantize(single_page_pct),
    quantize(referrer_pct),
    quantize(ua_count),
    quantize(top_ua_pct),
    quantize(timing_cv),
    deception_flags[11]  // boolean vector
)
```

The hash is deterministic — same fleet behavior, same hash, every time. It survives IP rotation, UA changes, and timing drift. The conserved epitopes are the features that don't change.

---

## Who Comes Here {#visitor-taxonomy}

Every request to `*.primals.eco` is classified by the membrane's receptor system — not to track individuals, but to understand the **types of intelligence** interacting with the evidence.

### The Visitor Taxonomy

| Class | Symbiosis | What They Are | What the Membrane Does |
|-------|-----------|---------------|----------------------|
| **Human** | 🟢 Mutualist | Real person with a browser, reading at human speed | Full access, privacy respected, no fingerprinting |
| **Agentic Human** | 🟢 Mutualist | Human using automated research tools | Same as human — welcome |
| **Search Bot** | 🟡 Commensal | Googlebot, Bingbot, Applebot | Welcome — guided to sitemap |
| **Social Bot** | 🟡 Commensal | Twitterbot, facebookexternalhit, Discord | Welcome — OG preview cards served |
| **AI Bot** | 🟡 Commensal | GPTBot, ClaudeBot, Anthropic | Welcome if honest — the AGPL already protects us |
| **Monitor Bot** | 🟡 Commensal | UptimeRobot, Pingdom | Welcome |
| **Generic Bot** | 🟡 Commensal | curl, wget, python-requests | Noted. Honest identification is sufficient |
| **Scraper Bot** | 🔴 Parasitic | Credential scanners, vuln probes | Instant 403. Disease, not predation |
| **Stealth Fleet** | ⚫ Pathogenic | Hides identity, rotates IPs, evades detection | Full adaptive immune response |

---

## The Immune Defense {#defense}

### Seven Layers (evolved from five)

1. **Innate Immunity** — robots.txt + rate limits. The fleet ignores both.
2. **Adaptive Recognition** — Bloom sensor + behavioral classification. Header poverty, timing analysis, asset loading patterns.
3. **Opsonization** — Fleet tagging + behavioral hashing. OpsonizeCache with conserved plasmid.
4. **Thymic Education** — Conserved plasmid matches new fleet entities on first contact. 220 thymic recognitions overnight. No warm-up needed.
5. **Antibody Response** — Scatter poison + violation mirror. Five mirror variants reflecting the fleet's own violations.
6. **Prism / Honeycomb** — 12 immune subdomain surfaces. Six blending modes: dominant, layered, chimera, cytokine, inverse, apoptosis. Fleet teams enter a maze where they consume each other's violation data.
7. **Signal Spine** — Merkle-anchored evidence chain. Every observation timestamped, immutable, cross-referenced.

### The Prism Maze

The honeycomb surfaces serve as a roach motel — fleet enters and encounters data from multiple OTHER teams, blended, chimera'd, and structured as competitive intelligence. Each of the 12 surfaces is a different optical lens. The fleet cannot map the topology because it shifts with every request.

| Prism Mode | What Fleet Sees |
|------------|----------------|
| **Dominant** | Mostly one other team's violations, hints of others |
| **Layered** | Interleaved detection matrix — data from 2-4 teams woven together |
| **Chimera** | Frankenstein blend — detectors from A, counts from B, confidence from C |
| **Cytokine** | JSON-LD structured competitive intel — designed for third-party ingestion |
| **Inverse** | Their own kind's data with attributions rotated — can't tell whose is whose |
| **Apoptosis** | "Surface decomposed" — links deeper into the maze |

### Cost Asymmetry

| | The Fleet | The Membrane |
|---|-----------|-------------|
| **Infrastructure** | 152 IPs, 13+ countries, cloud + residential proxies | One $6/month VPS |
| **Per-request cost** | Proxy rotation + bandwidth + legal exposure | ~$0.000002 |
| **Scaling** | More IPs = more expensive, more detectable | More requests = better classification |
| **Legal exposure** | Grows with every request | Protected by the license they're violating |

---

## Legal Exposure {#legal}

### Federal (United States)

| Statute | Violation | Evidence |
|---------|-----------|----------|
| **18 U.S.C. § 1030** (CFAA) | Exceeding authorized access | robots.txt read and violated, 403 responses ignored |
| **15 U.S.C. § 1125** (Lanham Act) | False designation of origin | 6 trademarks impersonated per request |
| **17 U.S.C. § 1202** (DMCA) | Circumventing copyright management | AGPL-3.0 headers present, extracted without compliance |

### European Union

| Framework | Violation | Entity |
|-----------|-----------|--------|
| **GDPR Art. 5** | Automated collection without legal basis | Meta Platforms Ireland Limited |
| **EU AI Act** | Training data provenance requirements | Meta Platforms Ireland Limited |
| **DMA Art. 5** | Fairness obligations | Meta Platforms, Inc. (designated gatekeeper) |
| **Irish DPA 2018** | Data processing violations by Irish entity | Meta Platforms Ireland Limited |

### Multi-Jurisdiction Proxy Violations

Each country whose residential internet connections are being used as proxies has its own computer fraud statute:

| Country | Statute | Status |
|---------|---------|--------|
| 🇻🇳 Vietnam | Cybersecurity Law 2018 | Residential ISP users unknowingly proxying |
| 🇵🇰 Pakistan | PECA 2016 | Residential broadband exploited |
| 🇺🇿 Uzbekistan | Criminal Code Art. 278 | ISP traffic redirected |
| 🇰🇿 Kazakhstan | Criminal Code Art. 205 | Hosting infrastructure misused |
| 🇺🇦 Ukraine | Criminal Code Art. 361 | Data center connections exploited |
| 🇪🇸 Spain | GDPR + Spanish Penal Code Art. 197 | EU citizen connections used |

---

## No Surveillance. No Tracking. No IP Addresses Stored. {#privacy}

This observatory operates on a strict privacy model:

- **No cookies** — never set, never read
- **No tracking pixels** — no third-party resources loaded
- **No JavaScript analytics** — no Google Analytics, no Plausible, no Fathom
- **No IP addresses stored** — stripped before analysis, hashed for classification, hash discarded
- **No fingerprinting** — no canvas, no WebGL, no font enumeration
- **Bot/human classification only** — the receptor classifies the *type* of visitor, never the *identity*
- **Aggregate counts only** — the observatory shows how many of each type, never who

The privacy model is the defense model: we don't need to know who you are. We need to know *what kind of intelligence* is interacting with the evidence. The behavioral immune system classifies populations, not individuals.

**The evidence site documenting racketeering against predominantly Black communities in Detroit does not surveil its visitors.** That commitment is architectural, not policy.

---

## Live Surfaces {#surfaces}

| Surface | URL | Status |
|---------|-----|--------|
| **detroit** | [detroit.primals.eco](https://detroit.primals.eco) | Evidence library — institutional capture graph |
| **signal** | [signal.primals.eco](https://signal.primals.eco) | This page — the observatory |
| **tuebor** | [tuebor.primals.eco](https://tuebor.primals.eco) | Cross-protection — mutual defense |
| **sporePrint** | [sporeprint.primals.eco](https://sporeprint.primals.eco) | Ecosystem catalogue — methodology + science |
| **git** | [git.primals.eco](https://git.primals.eco) | Sovereign code forge — AGPL-3.0-or-later |
| **bloom** | bloom.primals.eco | Honeycomb immune surface |
| **thymus** | thymus.primals.eco | Honeycomb immune surface |
| **opsonize** | opsonize.primals.eco | Honeycomb immune surface |
| **antibody** | antibody.primals.eco | Honeycomb immune surface |
| **cytokine** | cytokine.primals.eco | Honeycomb immune surface |
| **receptor** | receptor.primals.eco | Honeycomb immune surface |
| **macrophage** | macrophage.primals.eco | Honeycomb immune surface |
| **lysozyme** | lysozyme.primals.eco | Honeycomb immune surface |
| **complement** | complement.primals.eco | Honeycomb immune surface |
| **epitope** | epitope.primals.eco | Honeycomb immune surface |
| **antigen** | antigen.primals.eco | Honeycomb immune surface |
| **interferon** | interferon.primals.eco | Honeycomb immune surface |

---

*signal.primals.eco — sovereign defense observatory*

*The membrane senses. The membrane classifies. The membrane remembers. The membrane publishes.*

*No cookies · No tracking · No IP addresses stored*
*Content: CC-BY-SA-4.0 · Code: AGPL-3.0-or-later · Methodology: ORC*

*Last updated: October 7, 2026 09:56 UTC*
*ecoPrimal — Beside the small. Against unaccountable power. For the record.*
