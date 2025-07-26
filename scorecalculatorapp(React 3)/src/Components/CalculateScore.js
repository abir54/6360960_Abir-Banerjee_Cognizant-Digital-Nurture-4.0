import React from 'react';
import '../Stylesheets/mystyle.css';

const CalculateScore = (props) => {
    const { name, school, total, goal } = props;
    const averageScore = goal > 0 ? (total / goal) : 0;

    return (
        <div className="container">
            <div className="score-box">
                <h2 className="title">Student Score Details</h2>
                <div className="content">
                    <p className="text-item"><strong>Name:</strong> {name}</p>
                    <p className="text-item"><strong>School:</strong> {school}</p>
                    <p className="text-item"><strong>Total Score:</strong> {total}</p>
                    <p className="text-item"><strong>Goal:</strong> {goal}</p>
                    <p className="average-score">
                        <strong>Average Score:</strong> {averageScore.toFixed(2)}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CalculateScore;