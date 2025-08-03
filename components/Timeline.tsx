'use client';

import React, { FC } from 'react';
import styles from './Timeline.module.css'; 

const timelineEvents = [
  { year: "2002", title: "Company Incorporation & Initial Lease", description: "Took over Kakarbhitta ICD, international competitive bidding process." },
  { year: "2012", title: "Lease Renewal", description: "Lease of both ICDs renewed for another 10 years." },
  { year: "2020", title: "Company Incorporation & Initial Lease", description: "Took over Kakarbhitta ICD, international competitive bidding process." },
  { year: "2021", title: "Kakarbhitta ICD Operations Begin", description: "Took over Kakarbhitta ICD, international competitive bidding process." },
  { year: "2022", title: "Company Incorporation & Initial Lease", description: "Took over Kakarbhitta ICD, international competitive bidding process." },
  { year: "2023", title: "Chobhar ICD (TRS Logipark)", description: "Signed contract; began Chobhar ICD operation under new company name." }
];

const Timeline: FC = () => {
  return (
    <section className={styles.timelineSection}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>Our Journey</h2>
        <p className={styles.subtitle}>Take a look through our milestone and achievements</p>
      </div>

      {/* Desktop Timeline */}
      <div className={styles.timeline}>
        <div className={styles.timelineBar}></div>
        <div 
          className={styles.timelineGrid} 
          style={{ '--event-count': timelineEvents.length } as React.CSSProperties}
        >
          {timelineEvents.map((event, index) => (
            <div 
              key={event.year} 
              className={`${styles.timelineItem} ${index % 2 === 0 ? styles.itemAbove : styles.itemBelow}`}
            >
              <div className={styles.timelineDot}></div>
              <div className={styles.year}>{event.year}</div>
              <div className={styles.eventCard}>
                <div className={styles.eventTitle}>{event.title}</div>
                <p className={styles.eventDescription}>{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Mobile Timeline */}
      <div className={styles.mobileTimeline}>
        {timelineEvents.map(event => (
          <div key={event.year} className={styles.mobileItem}>
            <p className={styles.mobileYear}>{event.year}</p>
            <div className={styles.eventCard}>
              <div className={styles.eventTitle}>{event.title}</div>
              <p className={styles.eventDescription}>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;