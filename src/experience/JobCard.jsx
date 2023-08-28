import Header from "../components/Header";
import { useState, useCallback } from "react";
import { motion, useDragControls } from "framer-motion"
import '../styles.css'

const JobCard = ({ job, currentZ, setCurrentZ, allJobs, setJobs}) => {
  const [localZ, setLocalZ] = useState(0);
  const handleClose = useCallback((itemtoHide) => {
    setLocalZ(currentZ + 1);
    setCurrentZ(currentZ + 1);
    const updatedItems = allJobs.map(item => {
      if (item === itemtoHide) {
          return { ...item, show: false };
      }
      return item;
  });
  setJobs(updatedItems);
  }, [allJobs]);

  const dragControls = useDragControls()
  return (job.show && (
      <motion.div drag dragControls={dragControls} dragMomentum={false} dragListener={false}
        className="job-card" style={{ position: 'absolute', top: job.top, right: job.right, zIndex: localZ }}>
        <Header hasExit={true} title={job.company} handleClose={() => handleClose(job)} currentZ={currentZ} setCurrentZ={setCurrentZ} setLocalZ={setLocalZ} dragControls={dragControls}/>
        <img className="company-logo" src={job.image} />
        <h3 className="heading1">{job.heading1}</h3>
        <h4 className="heading2">{job.heading2}</h4>
        <p className="description">{job.description}</p>
      </motion.div>
    )
  );
};

export default JobCard;