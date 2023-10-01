"use client"
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { IoSchool } from "react-icons/io5";



export const Education = () => {

    return(
        <div className=" my-32 border-4 scroll-mt-28 mb-28 sm:mb-40">
            <span className="text-3xl font-bold">Education</span>
            <VerticalTimeline lineColor="" animate={true}>
                <VerticalTimelineElement
                 contentStyle={{
                    background:"rgba(255, 255, 255, 0.2)",
                    boxShadow: "none",
                    border: "1px solid rgba(0, 0, 0, 0.2)",
                    textAlign: "left",
                    padding: "1.3rem 2rem",
                    visibility: "visible"
                  }}
                  contentArrowStyle={{
                    borderRight: "0.4rem solid grey",
                        visibility: "visible"
                  }}
                  date="2021 - Present"
                  icon={<IoSchool/>}
                  iconStyle={{
                    background:"#4285F4",
                    fontSize: "1.5rem",
                    visibility: "visible",
                    position: "absolute"
                  }}
                >
                <h3 className="font-semibold capitalize">title</h3>
                <p className="font-normal !mt-0">location</p>
                <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                    item.description
                </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                 contentStyle={{
                    background:"rgba(255, 255, 255, 0.2)",
                    boxShadow: "none",
                    border: "1px solid rgba(0, 0, 0, 0.2)",
                    textAlign: "left",
                    padding: "1.3rem 2rem",
                    visibility: "visible"
                  }}
                  contentArrowStyle={{
                    borderRight: "0.4rem solid grey",
                        visibility: "visible"
                  }}
                  date="2021 - Present"
                  icon={<IoSchool/>}
                  iconStyle={{
                    background:"#8E7CC3",
                    fontSize: "1.5rem",
                    visibility: "visible"
                  }}
                >
                <h3 className="font-semibold capitalize">title</h3>
                <p className="font-normal !mt-0">location</p>
                <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                    item.description
                </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    );
}