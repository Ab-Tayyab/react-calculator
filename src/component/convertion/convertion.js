import React, { useState } from 'react';
import './convertion.css';

const UnitConverter = () => {
    const [unitA, setUnitA] = useState('cm');
    const [unitB, setUnitB] = useState('m');
    const [valueA, setValueA] = useState('');
    const [result, setResult] = useState('');
    const [showPopup, setShowPopup] = useState(false);

    const convertUnits = (value, fromUnit, toUnit) => {
        // Conversion rates
        const conversionRates = {
            cm: { m: 0.01, ft: 0.0328084 },
            m: { cm: 100, ft: 3.28084 },
            ft: { cm: 30.48, m: 0.3048 }
        };
        return value * (conversionRates[fromUnit][toUnit] || 1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const convertedValue = convertUnits(parseFloat(valueA), unitA, unitB);
        setResult(`${valueA} ${unitA} = ${convertedValue.toFixed(2)} ${unitB}`);
        setShowPopup(true);
    };

    const handlePopupClose = () => {
        setShowPopup(false);
    };

    return (
        <div className="unit-converter-container">
            <div className="field-container">
                <select value={unitA} onChange={(e) => setUnitA(e.target.value)} className="unit-select">
                    <option value="cm">Centimeters (cm)</option>
                    <option value="m">Meters (m)</option>
                    <option value="ft">Feet (ft)</option>
                </select>
                <span className="arrow">→</span>
                <select value={unitB} onChange={(e) => setUnitB(e.target.value)} className="unit-select">
                    <option value="cm">Centimeters (cm)</option>
                    <option value="m">Meters (m)</option>
                    <option value="ft">Feet (ft)</option>
                </select>
            </div>
            <form onSubmit={handleSubmit} className="input-form">
                <input
                    type="number"
                    placeholder={`Enter value in ${unitA}`}
                    value={valueA}
                    onChange={(e) => setValueA(e.target.value)}
                    className="input-field"
                    required
                />
                <button type="submit" className="submit-button">Convert</button>
            </form>
            {showPopup && (
                <div className="popup">
                    <div className="popup-content">
                        <span className="close-button" onClick={handlePopupClose}>&times;</span>
                        <p>{result}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UnitConverter;
