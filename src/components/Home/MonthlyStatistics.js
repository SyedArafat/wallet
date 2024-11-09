import React from 'react';

const MonthlyStatistics = () => {
    return (
        <>
            <section>
                <div className="custom-container">
                    <div className="statistics-banner">
                        <div className="d-flex justify-content-center gap-3">
                            <div className="statistics-image">
                                <i className="icon" data-feather="bar-chart-2"></i>
                            </div>
                            <div className="statistics-content d-block">
                                <h5>Monthly Statistics</h5>
                                <h6>30% better performance than previous</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    );
};

export default MonthlyStatistics;
