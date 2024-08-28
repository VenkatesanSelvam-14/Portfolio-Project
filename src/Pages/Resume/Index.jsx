import React from 'react';
import PageHeaderContent from '../../Components/PageHeaderContainer/Index';
import { BsInfoCircleFill } from 'react-icons/bs';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { data } from './Utils';
import 'react-vertical-timeline-component/style.min.css';
import './Styles.scss';
import { MdWork } from 'react-icons/md';

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <PageHeaderContent
        headerText={"My Resume"}
        icon={<BsInfoCircleFill size={40} />}
      />

      <div className="timeLine">
        <div className="timeLine__experience">
          <h3 className="timeLine__experience__header-text">Experience</h3>
          <VerticalTimeline
            layout={'1-column'}
            lineColor="var(--yellow-theme-main-color)"
          >
            {data.experience.map((item, i) => (
              <VerticalTimelineElement
                key={i}
                className="timeLine__experience__vertical-timeline-element"
                contentStyle={{
                  background: 'none',
                  color: 'var(--yellow-theme-sub-text-color)',
                  border: '1.5px solid var(--yellow-theme-main-color)',
                }}
                date={item.date}
                icon={<MdWork />}
                iconStyle={{
                  background: '#181818',
                  color: 'var(--yellow-theme-main-color)',
                }}
              >
                <div className="vertical-timeline-element-title-wrapper">
                  <h3 className="vertical-timeline-element-title">
                    {item.title}
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    {item.office}
                  </h4>
                  {/* <h4 className="vertical-timeline-element-subtitle">
                    {item.subtitle}
                  </h4> */}
                </div>
                <p className="vertical-timeline-element-description">
                  {item.description}
                </p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
        <div className="timeLine__education">
          <h3 className="timeLine__education__header-text">Education</h3>
          <VerticalTimeline
            layout={'1-column'}
            lineColor="var(--yellow-theme-main-color)"
          >
            {data.education.map((item, i) => (
              <VerticalTimelineElement
                key={i}
                className="timeLine__experience__vertical-timeline-element"
                contentStyle={{
                  background: 'none',
                  color: 'var(--yellow-theme-sub-text-color)',
                  border: '1.5px solid var(--yellow-theme-main-color)',
                }}
                date={item.date}
                icon={<MdWork />}
                iconStyle={{
                  background: '#181818',
                  color: 'var(--yellow-theme-main-color)',
                }}
              >
                <div className="vertical-timeline-element-title-wrapper">
                  <h3 className="vertical-timeline-element-title">
                    {item.title}
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    {item.subtitle}
                  </h4>
                </div>

                <p className="vertical-timeline-element-description">
                  {item.description}
                </p>
                <p className="vertical-timeline-element-description">
                  {item.percentage}
                </p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default Resume;
