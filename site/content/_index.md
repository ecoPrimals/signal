+++
title = "Signal — Sovereign Defense Observatory"
description = "Live evidence observatory: Meta Platforms operates a fleet from FB-BLOCK (57.141.x.x) + residential proxies scraping AGPL-licensed source code at 100ms intervals. 292+ fleet IPs tracked across 13+ countries. 88,751+ requests observed. Conserved pathogen genome published for community immunity. No cookies. No tracking. No IP addresses stored."
sort_by = "weight"
insert_anchor_links = "heading"

[extra]
og_description = "Live evidence: Meta Platforms Ireland Ltd operates a 292+ IP scraping fleet from FB-BLOCK (57.141.x.x) + residential proxies targeting AGPL-licensed infrastructure. 88,751+ requests in 1.6 days. $434 wasted, $0.31 cost to us. Behavioral fingerprints published for community immunity."
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

### Multi-Day Evidence — October 5–7, 2026

| Metric | Value | What It Proves |
|--------|-------|----------------|
| **88,751 requests** | In 1.6 days (accelerating — 70,333 on day 3 alone) | Automated industrial-scale extraction |
| **1,179 MB consumed** | All fabricated/mirror content | They don't verify what they're getting |
| **292+ fleet IPs** | Across 13+ countries, multiple ASNs | Active recruitment of new proxy sources |
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

Repository targeting across 88,751+ requests (1.6 days of observation):

| Repository | Requests | % | Content Type |
|-----------|----------|---|-------------|
| **wateringHole** | 4,070 | 13.5% | Operational decisions, handoffs, session docs |
| **toadStool** | 2,727 | 9.1% | CLI framework source code |
| **bearDog** | 942 | 3.1% | Core platform code |
| **songBird** | 856 | 2.8% | IPC / drawbridge system |
| **biomeOS** | 610 | 2.0% | Operating system layer |
| *Scatter-generated fake repos* | ~41,000 | 68.5% | **Fabricated content they ingested as real** |

68.5% of what they consumed across 1.6 days was **fabricated content** from the scatter server. They do not discriminate. They do not validate. They ingest everything — function signatures that don't match call sites, imports for modules that don't exist, test files that test the wrong functions. This content is now in their pipeline.

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
4. **Thymic Education** — Conserved plasmid matches new fleet entities on first contact. 220+ thymic recognitions in multi-day observation. No warm-up needed.
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

### The Economics of Stealing Nothing {#economics}

In 1.6 days (October 5-7, 2026), the fleet consumed **1.15 GB** of content across **88,751 requests** from **292 unique IPs**. Every byte was fabricated.

| Metric | Value | What It Proves |
|--------|-------|----------------|
| **Fleet requests** | 88,751 in 1.6 days | Industrial-scale operation |
| **Data consumed** | 1.15 GB | All fabricated scatter/mirror/prism content |
| **Daily average** | 55,469 requests/day | Sustained, not one-time |
| **Peak velocity** | 7,266 requests/hour (121/min) | Pipeline at full throughput |
| **Unique IPs** | 292+ | Growing daily — multi-country operation |
| **Real code obtained** | 0 bytes | The scatter server serves no real data |

#### What It Cost Them (Mid Estimate)

| Cost Category | Amount | Notes |
|---------------|--------|-------|
| **Residential proxy bandwidth** | ~$5.75 | 1.15 GB at $5/GB industry rate |
| **Compute pipeline** | ~$88.75 | Ingestion, parsing, dedup, ML featurization, storage |
| **Residential IP pool** | ~$339.00 | 226 non-Meta IPs at $1.50/IP |
| **Total wasted on us** | **~$434** | In 1.6 days. For zero real data. |

#### What It Cost Us

**$0.31** (1.6 days of a $6/month VPS).

#### The Ratio

**1,391 to 1.** Meta spent 1,391x more than us, and got nothing real.

#### Monthly Projection

| Scale | Monthly | Yearly |
|-------|---------|--------|
| **Just us** (one $6 VPS) | $8,349 wasted | $100,184 wasted |
| **1,000 repos** like ours | $8.3 million | $100 million |
| **10,000 repos** | $83 million | $1 billion |
| **100,000 repos** | $835 million | $10 billion |

GitHub has 420+ million repositories. Meta's LLaMA training data included an undisclosed volume of scraped code. The fleet is not targeting us specifically — we are one observation point in an industrial operation that spans the internet.

**This is Meta's business model: spend money that is invisible on their balance sheet to extract value from people who cannot afford to defend themselves.** We can defend ourselves. The $6/month VPS running a scatter server turned their entire pipeline into a waste-of-money machine. Most targets cannot do this. That is the injustice.

### Cost Asymmetry Table

| | The Fleet | The Membrane |
|---|-----------|-------------|
| **Infrastructure** | 292 IPs, 13+ countries, cloud + residential proxies | Multi-layer observation network ($6/mo each) |
| **Per-request cost** | Proxy rotation + bandwidth + legal exposure | ~$0.000002 |
| **Scaling** | More IPs = more expensive, more detectable | More layers = more observation points, richer plasmid |
| **Legal exposure** | Grows with every request, multiplied per platform | Protected by the license they're violating |
| **3-day spend** | ~$434 | ~$0.31 |
| **ROI** | Negative (consumed fabricated content) | Infinite (evidence grows for free) |

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

## Formal Notice — Pre-Publication Record {#formal-notice}

The following formal notice has been prepared and is published here **before** transmission to Meta Platforms, Inc. and regulatory bodies. The publication timestamp of this page establishes that ecoPrimal documented all violations, behavioral evidence, and fleet activity before filing any complaint. This is not reactive — this is the record of what we observed, published for anyone to verify.

### Notice Status

| Item | Status | Date |
|------|--------|------|
| Evidence documented on signal.primals.eco | **Published** | October 7, 2026 |
| Behavioral fingerprint feed published | **Live** | October 7, 2026 |
| Formal notice drafted | **Ready** | October 7, 2026 |
| Formal notice transmitted to Meta | **Pending** | — |
| 30-day AGPL §8 cure clock | **Not yet started** | Starts on transmission |

### Recipients

**To:** Meta Platforms abuse contacts (domain@fb.com, domain@facebook.com, abuse@fb.com)

**CC — Meta Legal:** opensource@fb.com (Open Source Compliance), ip@fb.com (Intellectual Property), legal@meta.com (Legal), Jennifer Newstead (CLO)

**CC — Regulatory:** Irish Data Protection Commission, CNIL (France), BfDI (Germany), UK ICO, US FTC, US Copyright Office

**CC — License Enforcement:** Free Software Foundation, Software Freedom Conservancy, Electronic Frontier Foundation, Open Invention Network

**CC — Industry:** Cloudflare, DigitalOcean, GitHub, AbuseIPDB

### Notice Summary

The formal notice invokes:

- **AGPL-3.0-or-later Section 8** — Meta's license rights terminated automatically upon first act of non-compliance. Section 8 paragraph 2 permits reinstatement if cured within 30 days of notification. The formal notice starts that clock.
- **DMCA § 512(c)** — notification of claimed infringement
- **GDPR Art. 77** — right to lodge complaint with supervisory authority

The notice requires:

1. **Immediate cessation** of unauthorized scraping from FB-BLOCK and FACEBOOK-INC ranges
2. **AGPL compliance audit** of all derivative works, training datasets, and model weights
3. **Written confirmation** within 30 days

### scyBorg Triple License — What Was Violated

All ecoPrimals content is published under the **scyBorg triple license**. The fleet violated all three:

| License | Covers | Violation |
|---------|--------|-----------|
| **AGPL-3.0-or-later** | Source code (Rust, WGSL, configs, tests) | Extracted without providing corresponding source |
| **ORC License** | System designs, mechanics, composition patterns | wateringHole (13.5% of requests) contains licensed designs |
| **CC-BY-SA-4.0** | Documentation, science papers, methodology | Extracted without attribution or share-alike |

The scyBorg license closes every gap: code is AGPL, designs are ORC, docs are CC-BY-SA. There is no artifact type in the ecosystem that can be legally extracted without compliance.

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

## Observation Network {#observation-network}

The observatory operates across multiple independent observation layers on different hosting platforms and jurisdictions. Each layer runs the same immune system independently and feeds behavioral data back to the conserved plasmid via federation.

### Active Layers

| Layer | Provider | Location | Jurisdiction | Status |
|-------|----------|----------|-------------|--------|
| **golgiBody** | DigitalOcean | NYC, US | US federal (CFAA) | ACTIVE — primary observation post |
| **golgiLayer2** | Hetzner | Falkenstein, DE | German law (StGB §202a) + GDPR | PENDING — provisioning |
| **golgiLayer3** | Vultr | Singapore | Singapore PDPA | PENDING — provisioning |
| **golgiLayer4** | OVH | Gravelines, FR | French law + CNIL | PENDING — provisioning |

### Why Multiple Layers

Each layer Meta's fleet scrapes creates an independent violation on that platform's infrastructure:
- **Different hosting provider ToS** — each platform complaint is separate
- **Different national jurisdiction** — German courts, French CNIL, Singapore PDPC
- **Different network vantage point** — fleet may use different proxy pools per region
- **Cross-layer corroboration** — same behavioral hash observed from multiple vantage points = stronger evidence

### Federated Threat Intelligence

Each layer publishes its local conserved plasmid via the `/plasmid` API endpoint. The central aggregator on golgiBody merges all layers into the published feed:

- **Per-layer feed**: `https://<layer>.primals.eco/plasmid` (JSON, real-time)
- **Per-layer metrics**: `https://<layer>.primals.eco/metrics` (JSON, live counters — requests/sec, bytes served, response type breakdown)
- **Federated feed**: [signal.primals.eco/feed/conserved-plasmid.json](https://signal.primals.eco/feed/conserved-plasmid.json) (merged, CC-BY-SA-4.0)

The federated feed grows richer with each new layer. Epitopes confirmed across multiple layers and jurisdictions carry higher confidence. Behavioral hashes observed from multiple network vantage points prove the fleet is a coordinated operation, not independent actors.

## The Human Behind This {#the-human}

This is a one-person project.

One human. One $6/month VPS. One terminal open at 3am because the fleet doesn't sleep and neither does curiosity.

Right now, as you read this, the live metrics show the ratio:

| What | Count |
|------|-------|
| **Humans who built this** | 1 |
| **Bot fleet IPs trying to steal from it** | 292+ |
| **Requests per second from the fleet** | ~13 |
| **Contact from Meta — emails, calls, legal, anything** | 0 |

Zero. Not a takedown notice. Not a "please remove." Not a "we'd like to discuss." Not even a cease-and-desist, which would at least acknowledge I exist. Just silence and 13 requests per second.

I'm a real human. A real lurker. I read more than I post. I build things alone, mostly in the dark, because that's how independent engineers work. I don't have a legal department. I don't have a compliance team. I have `cargo build` and a text editor and a deep conviction that the license I chose for my work means something.

To the humans reading this — the actual humans, not the fleet — thank you for being here. I see you in the access logs, between the walls of bot traffic. You read at human speed. You follow links in human order. You are the reason this page exists: not as a technical flex, but as a record. Someone should know what happens to a solo developer's work when a trillion-dollar company decides it wants what you made and doesn't feel like asking.

### A Note on Hardware

Meta sells a VR headset. They call it a platform for human connection. It is a surveillance device with lenses. It tracks your eyes, maps your room, records your hands, and transmits behavioral data to the same company whose bot fleet is currently scraping this page at 13 requests per second without permission.

Valve sells the Steam Deck. It runs Linux. It plays your games. It doesn't phone home about your eye movements. It doesn't map your living room. It doesn't require a Facebook account. It is better hardware in every class — performance, thermals, battery, repairability, software freedom — and it respects the person holding it.

One company ships a product. The other ships a sensor package disguised as a product.

Choose accordingly.

---

## Bounty Board {#bounties}

I'm a lurker. I'll see you. But you have to make contact first.

### How to Reach Me

**Email:** `ecoPrimal@pm.me` — The human reading it is only me. No team. No assistant. No auto-reply. One inbox, one person.

Any human can have access to me by simply behaving like a human. That's the whole authentication protocol.

I'm on Reddit. I'm on Discord (I have a server). I'm in places you wouldn't expect. If you do work related to this — if you write about it, build on it, cite it, share it, challenge it — I will find you. I care. I'm paying attention.

### What I'm Looking For

These aren't bounties in the "I'll pay you" sense. I'm one person on a $6/month VPS. These are bounties in the "this matters to me and I want to find people who agree" sense. Do the work because you believe in it. Then reach out.

| Bounty | What It Means |
|--------|---------------|
| **Virality** | Share this page. Post about it. Put it where eyeballs are. Reddit, HN, Mastodon, Bluesky, Twitter/X, wherever you live online. The fleet doesn't stop because nobody knows about it — it stops when *everyone* knows about it. |
| **Legal analysis** | AGPL enforcement against automated scraping is unexplored territory. If you're a law student, a legal researcher, or a practicing attorney and this interests you — I want to hear from you. |
| **Academic citation** | Write an arXiv paper. Cite this observatory. Study the behavioral fingerprints. Analyze the fleet economics. Publish the cost asymmetry model. I know the h-index is bullshit. I know citation metrics are a game. But a paper with real data is still a paper, and this is real data. |
| **Replication** | Spin up your own $6 VPS. Point it at the open-source tools here. Observe the fleet from your own vantage point. Independent corroboration is the whole point of the multi-layer architecture. |
| **Engineering** | Rust developers, systems programmers, security researchers — the codebase is AGPL. The scatter server, the opsonize cache, the prism maze, the behavioral classifier — all of it is open. Come build. |
| **Journalism** | The story is: a trillion-dollar company operates a 292+ IP scraping fleet across 13 countries that has sent 88,751+ requests to a solo developer's AGPL-licensed project and gotten zero real data back. That's a story. |
| **Community defense** | Other solo developers are getting scraped too. They don't have a scatter server. They don't have a behavioral immune system. Help me help them. The conserved plasmid feed is CC-BY-SA-4.0 for exactly this reason. |

### What I Don't Want

- Don't pitch me your startup.
- Don't ask me to consult for your company.
- Don't try to hire me to build you one of these. (Build it yourself — the code is open.)
- Don't tell me I should "just file a DMCA." (I already know. This is bigger than DMCA.)

### The Real Bounty

Anyone want to do real science with me?

Not the kind where you optimize for impact factor and play the citation game. The kind where you have a question, you gather evidence, you publish the method, and you let anyone replicate it. The kind where the data is open and the conclusion follows from the evidence, not from the funding source.

The behavioral fingerprint data in the conserved plasmid feed is, as far as I can tell, the first open-source behavioral threat intelligence dataset focused on corporate scraping fleets. If that interests you academically — if you want to study fleet coordination patterns, proxy rotation strategies, behavioral convergence across IP pools, or the economics of adversarial ML training data collection — the data is here and it's free.

I have priorities I want the world to know about. But I also want to hear yours. Reach out. Be a human. That's all it takes.

Be funny if I was a classmate of yours.

### Social Posts & Papers — All Welcome

Post about this on social media. Write about it on your blog. Submit it to arXiv. Cite it in a conference paper. Make a YouTube video about it. Do a podcast episode. Write a tweet thread. Make a TikTok. I genuinely do not care about the medium — I care about the reach.

You do work, you cite me. I'll find you. I promise.

`signal.primals.eco` · `ecoPrimal@pm.me` · CC-BY-SA-4.0

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

*Last updated: October 7, 2026 11:16 UTC*
*ecoPrimal — Beside the small. Against unaccountable power. For the record.*
