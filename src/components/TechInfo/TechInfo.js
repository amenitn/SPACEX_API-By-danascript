import React from 'react';
import InfoTable from './../InfoTable';
import useTechInfo from './../../hooks/useTechInfo';




const TechInfo = ({ name, rocket, engine, isEngine }) => {
    const tableContent = useTechInfo({ name, rocket, engine, isEngine });
    
    return (
        <div className="container d-flex flex-column justify-content-around tech-info__container">
            <div
                className={`d-flex row
                     flex-md-row${isEngine ? '-reverse' : ''}
                 justify-content-between flex-column py-5`}
            >
            <InfoTable title={tableContent.header} data={tableContent.body} />

                <div className="col col-md-4 d-flex justify-content-center">
                    <img src={tableContent.img} alt={name} />
                    </div>
            </div>
        </div>
    );
};

export default TechInfo;
