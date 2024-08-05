function Fieldset({tags,onTagChange}) {
    
  return (
    <>
      <fieldset
        onChange={(e) => {
            onTagChange(e);
        }}
      >
        <legend className=" font-bold text-xl">Filter</legend>
        <div>
            <label className=" uppercase">
              <input className="m-2 p-2" type="radio" name="tag" value='all' defaultChecked />
              All Tags
            </label>
          </div>
        {Array.from(tags).map((tag) => (
          <div key={tag}>
            <label className=" uppercase">
              <input className="m-2 p-2" type="radio" name="tag" value={tag} />
              {tag}
            </label>
          </div>
        ))}
      </fieldset>
    </>
  );
}

export default Fieldset;
