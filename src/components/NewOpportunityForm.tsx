import React, { useState } from 'react';

export const NewOpportunityForm: React.FC<INewOpportunityFormProps> = ({addOpportunity}) => {
  const [input, setInput] = useState({
    title: '',
    description: '',
    location: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput({...input, [name]: value});
  }

  const buildOpp = () => ({ title: input.title, description: input.description, location: input.location, user_id: '1', id: ''})

  return (
    <div>
      <label>Title: </label>
      <input type="text" name="title" value={input.title} onChange={handleInputChange} placeholder="add a title..." />
      <br />
      <label>Description: </label>
      <input type="text" name="description" value={input.description} onChange={handleInputChange} placeholder="add a description..." />
      <br />
      <label>Location: </label>
      <input type="text" name="location" value={input.location} onChange={handleInputChange} placeholder="add a location..." />
      <br />
      <input type="submit" value="Create new opportunity" onClick={() => addOpportunity(buildOpp())} />
    </div>
  );
}
