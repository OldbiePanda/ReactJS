const formData = {
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0
};

export function FormSection({handleFormChange}) {

    const handleFieldChange = (event) => {
        const {id, value, type} = event.target;
        const parsedValue = type === "number" ? +value : value;
        formData[id] = parsedValue;
        handleFormChange(formData);
    };

  return (
    <form id="user-input">
        <div className="input-group">
            <span>
                <label>Initial investment</label>
                <input 
                    type="number" 
                    value={formData.initialInvestment} 
                    id="initialInvestment"
                    onChange={(event) => handleFieldChange(event)}
                />
            </span>
            <span>
                <label>Annual investment</label>
                <input 
                    type="number" 
                    value={formData.annualInvestment}
                    id="annualInvestment" 
                    onChange={(event) => handleFieldChange(event)}
                />
            </span>
        </div>
        <div className="input-group">
            <span>
                <label>Expected return</label>
                <input 
                    type="number" 
                    value={formData.expectedReturn} 
                    id="expectedReturn" 
                    onChange={(event) => handleFieldChange(event)}
                />
            </span>
            <span>
                <label>Duaration</label>
                <input 
                    type="number" 
                    value={formData.duration}
                    id="duration" 
                    onChange={(event) => handleFieldChange(event)}
                />
            </span>   
        </div>
    </form>
  )
}