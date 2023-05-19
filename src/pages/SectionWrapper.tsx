import React from 'react'

import classes from './SectionWrapper.module.scss'

interface PageProps {
    sectionTitle?: string,
    sectionSubTitle?: string,
    children?: JSX.Element
}


const SectionWrapper = (props: PageProps) => {
    return (
        <section>
            <div className={classes.sectionTitle}>{ props.sectionTitle }</div>
            <div className={classes.sectionSubTitle}>{ props.sectionSubTitle }</div>
            <div className={classes.sectionContent}>
                { props.children }
            </div>
        </section>
    )
}

export default SectionWrapper