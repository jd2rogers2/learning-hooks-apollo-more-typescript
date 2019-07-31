import React, { useState } from 'react';

export const NewOpportunityForm: React.FC<INewOpportunityFormProps> = ({addOpportunity}) => {
  const [input, setInput] = useState({
    title: '',
    description: '',
    location: ''
  });

  const handleSubmit = (e: React.SyntheticEvent<HTMLInputElement>) => {
    e.preventDefault();
    // if (!input) return;
    addOpportunity({
      title: input,
      location: '',
      user_id: '1',
      description: '',
      id: ''
    });
    setInput({title: '', description: '', location: ''});
  }

  const handleInputChange = e => {
    // setInput(e.target.value);
  }

  const buildOpp = () => {}

  return (
    <div>
      <label>Title: </label>
      <input type="text" name="title" value={input.title} onChange={handleInputChange} placehold="add a title..." />
      <label>Description: </label>
      <input type="text" name="description" value={input.description} onChange={handleInputChange} placehold="add a description..." />
      <label>Location: </label>
      <input type="text" name="location" value={input.location} onChange={handleInputChange} placehold="add a location..." />
      <input type="submit" value="Create new opportunity" onClick={() => addOpportunity(buildOpp())} />
    </div>
  );
}
