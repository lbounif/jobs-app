/* eslint-disable jsx-a11y/alt-text */
//props = {
    // job : {
    //      logo: "",
    //      company: "",
    //      position: "",
    //      role: "",
    //      .....
    // }
// }
const Job = (props) => {
  return (
    // Rajouter une class au Jobs avec featured == True,
    <div className={`container ${props.job.featured ? "border_featured" : ""}`}>
      <img src={props.job.logo} alt="logo" />
      <div className="job-desc">
        <div>
          <span style={{ color: "hsl(180, 29%, 50%)" }}>
            {props.job.company}
          </span>
          {props.job.new && <span className="new">NEW</span>}
          {props.job.featured && <span className="featured">FEATURED</span>}
        </div>
        <h5>{props.job.position}</h5>
        <div>
          <span>{props.job.postedAt}</span>
          <span> {props.job.contract} </span>
          <span> {props.job.location} </span>
        </div>
      </div>
      <div className="job-language">
        <span>{props.job.role}</span>
        <span> {props.job.level} </span>
        {/* Récupérer tout les élément de la liste langauges et mettre la cle à id job*/}
        {props.job.languages.map((language, index) => (
          <span key={index}>{language}</span>
        ))}

        {/* Récupérer tout les élément de la liste tools */}
        {props.job.tools.map((tool, index) => (
          <span key={index}> {tool}</span>
        ))}
      </div>
    </div>
  );
}

export default Job