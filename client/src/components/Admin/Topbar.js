import TopbarTitle from "./TopbarTitle"

const Topbar = ({title}) => {
  return (
    <div className="topbar">
      <TopbarTitle title={title} />
    </div>
   );
}
 
export default Topbar;