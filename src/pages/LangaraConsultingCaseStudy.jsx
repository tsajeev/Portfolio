import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CaseStudy.module.css';

function LangaraConsultingCaseStudy() {
  return (
    <div className={styles.csLayout}>
      <main className={styles.mainContent}>
        
        {/* Back Navigation */}
        <Link to="/" className={styles.backLink}>
          ←
        </Link>

        {/* Hero Section */}
        <section className={styles.section}>
          <h1 className={styles.sectionHeading}>Langara Consulting Club Website</h1>
          <p className={styles.sectionBody}>
            Redesigned and developed a responsive client-facing portal to streamline case matching and manage student events.
          </p>
        </section>

        {/* Meta Grid Box */}
        <section className={styles.metaGrid}>
          <div>
            <p className={styles.metaLabel}>Role</p>
            <p className={styles.metaValue}>Product Manager & Lead Developer</p>
          </div>
          <div>
            <p className={styles.metaLabel}>Team</p>
            <p className={styles.metaValue}>1 PM, 2 Developers, 1 UX Designer</p>
          </div>
          <div>
            <p className={styles.metaLabel}>Timeline</p>
            <p className={styles.metaValue}>1 Month (Fall 2025)</p>
          </div>
          <div>
            <p className={styles.metaLabel}>Skills</p>
            <p className={styles.metaValue}>React · Vite · CSS Modules</p>
          </div>
        </section>

        {/* 01. Context */}
        <section className={styles.section}>
          <p className={styles.sectionLabel}>01. Context</p>
          <h2 className={styles.sectionHeading}>Connecting student consultants with local businesses.</h2>
          <p className={styles.sectionBody}>
            The Langara Consulting Club serves as a bridge for students looking to gain real-world advisory experience. However, managing applications manually via spreadsheets became inefficient as the club grew.
          </p>
          <div className={styles.callout}>
            <p style={{ fontStyle: 'italic', margin: 0 }}>
              "We needed a centralized platform where clients could post challenges and students could browse current timelines instantly."
            </p>
          </div>
        </section>

        {/* 02. The Product Problem */}
        <section className={styles.section}>
          <p className={styles.sectionLabel}>02. Product Problem</p>
          <h2 className={styles.sectionHeading}>Information distribution was disjointed.</h2>
          <p className={styles.sectionBody}>
            Students were missing deadlines because project metrics, scope parameters, and timeline applications were located on separate document portals. The goal of this redesign was to minimize friction and consolidate information hierarchy.
          </p>
        </section>

        {/* You can add additional sections following this pattern (03. Process, 04. Final Outcome) */}

      </main>
    </div>
  );
}

export default LangaraConsultingCaseStudy;
