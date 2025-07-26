import React from 'react';
import CohortDetails from './CohortDetails';
import './Dashboard.css';

const Dashboard = () => {
    // Sample cohort data
    const cohorts = [
        {
            id: 1,
            name: 'React Fundamentals',
            technology: 'React.js',
            startDate: '2024-01-15',
            endDate: '2024-03-15',
            status: 'ongoing',
            participants: 25,
            location: 'Bangalore'
        },
        {
            id: 2,
            name: 'Full Stack Development',
            technology: 'MEAN Stack',
            startDate: '2023-10-01',
            endDate: '2023-12-31',
            status: 'completed',
            participants: 30,
            location: 'Chennai'
        },
        {
            id: 3,
            name: 'Angular Advanced',
            technology: 'Angular',
            startDate: '2024-02-01',
            endDate: '2024-04-30',
            status: 'ongoing',
            participants: 20,
            location: 'Hyderabad'
        },
        {
            id: 4,
            name: 'Node.js Backend',
            technology: 'Node.js',
            startDate: '2023-08-15',
            endDate: '2023-11-15',
            status: 'completed',
            participants: 18,
            location: 'Mumbai'
        },
        {
            id: 5,
            name: 'Java Spring Boot',
            technology: 'Java',
            startDate: '2024-01-01',
            endDate: '2024-04-01',
            status: 'ongoing',
            participants: 35,
            location: 'Pune'
        },
        {
            id: 6,
            name: 'Python Django',
            technology: 'Python',
            startDate: '2023-09-01',
            endDate: '2023-12-01',
            status: 'completed',
            participants: 22,
            location: 'Delhi'
        }
    ];

    // Separate ongoing and completed cohorts
    const ongoingCohorts = cohorts.filter(cohort => cohort.status === 'ongoing');
    const completedCohorts = cohorts.filter(cohort => cohort.status === 'completed');

    return (
        <div className="dashboard">
            <header className="dashboard-header">
                <h1>My Academy - Cohort Dashboard</h1>
                <p className="subtitle">Track ongoing and completed training cohorts</p>
            </header>

            <div className="dashboard-content">
                <section className="cohort-section">
                    <h2 className="section-title ongoing-title">
                        🚀 Ongoing Cohorts ({ongoingCohorts.length})
                    </h2>
                    <div className="cohorts-container">
                        {ongoingCohorts.map(cohort => (
                            <CohortDetails key={cohort.id} cohort={cohort} />
                        ))}
                    </div>
                </section>

                <section className="cohort-section">
                    <h2 className="section-title completed-title">
                        ✅ Completed Cohorts ({completedCohorts.length})
                    </h2>
                    <div className="cohorts-container">
                        {completedCohorts.map(cohort => (
                            <CohortDetails key={cohort.id} cohort={cohort} />
                        ))}
                    </div>
                </section>
            </div>

            <footer className="dashboard-footer">
                <p>Total Cohorts: {cohorts.length} | 
                   Total Participants: {cohorts.reduce((sum, cohort) => sum + cohort.participants, 0)}
                </p>
            </footer>
        </div>
    );
};

export default Dashboard;