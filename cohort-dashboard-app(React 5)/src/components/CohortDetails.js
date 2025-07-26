import React from 'react';
import styles from './CohortDetails.module.css';

const CohortDetails = ({ cohort }) => {
    // Determine the color for h3 based on cohort status
    const getTitleStyle = () => {
        return {
            color: cohort.status === 'ongoing' ? 'green' : 'blue'
        };
    };

    return (
        <div className={styles.box}>
            <h3 style={getTitleStyle()}>
                {cohort.name}
            </h3>
            <dl>
                <dt>Technology:</dt>
                <dd>{cohort.technology}</dd>
                
                <dt>Start Date:</dt>
                <dd>{cohort.startDate}</dd>
                
                <dt>End Date:</dt>
                <dd>{cohort.endDate}</dd>
                
                <dt>Status:</dt>
                <dd style={{ 
                    fontWeight: '600',
                    color: cohort.status === 'ongoing' ? 'green' : 'blue',
                    textTransform: 'capitalize'
                }}>
                    {cohort.status}
                </dd>
                
                <dt>Participants:</dt>
                <dd>{cohort.participants}</dd>
                
                <dt>Location:</dt>
                <dd>{cohort.location}</dd>
            </dl>
        </div>
    );
};

export default CohortDetails;