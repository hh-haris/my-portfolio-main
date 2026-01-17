import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { RippleButton } from "@/components/RippleButton";

const NotFound = () => {
  return (
    <div className="fixed inset-0 flex min-h-screen flex-col items-center justify-center bg-background z-[100]">
      <motion.h1 
        className="text-[10rem] md:text-[14rem] lg:text-[18rem] font-instrument leading-none select-none text-foreground mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        404
      </motion.h1>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <Link to="/">
          <RippleButton 
            className="px-6 py-3 bg-primary text-primary-foreground font-space text-sm rounded-full hover:bg-foreground hover:text-background transition-colors"
          >
            <FontAwesomeIcon icon={faHome} className="w-4 h-4" />
            Back to Home
          </RippleButton>
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
