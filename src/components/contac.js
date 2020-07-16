import React, {Fragment} from "react";
import {AnimatePresence, motion} from "framer-motion";
export default function Contact(props) {
    return (
        <motion.div
            initial={"out"}
            animate={"in"}
            exit={"out"}
            variants={props.transtion}>
            <strong>
                <p>{"Name :"}</p>
            </strong>
            <p>{" Mansan SOULEIMAN AHMED"}</p>
            <strong>
                <p>{"Mail :"}</p>
            </strong>
            <p>{" mansan.souleiman.ahmed@gmail.com"}</p>
            <strong>
                <p>{"Github account:"}</p>
            </strong>

            <p>{"https://github.com/MansanSouleimanAhmed"}</p>
            <strong>
                <p>{"Linkedin account:"}</p>
            </strong>
            <p>{"https://www.linkedin.com/in/mansan-souleiman-ahmed/"}</p>
            <strong>
                <p>{"Phone number :"}</p>
            </strong>
            <p>{"32 (0) 465/ 34 74 37"}</p>
            <strong>
                <p>{"WhatsApp :"}</p>
            </strong>
            <p>{"32 (0) 465/ 34 74 37"}</p>
            <strong>
                <p>{"Addresse :"}</p>
            </strong>
            <p>{"Rue Sohet n°11"}</p>
            <strong>
                <p>{"Zip Postal Code : "}</p>
            </strong>
            <p>{"4000"}</p>
            <strong>
                <p>{"Town :"}</p>
            </strong>
            <p>{"Liège"}</p>
        </motion.div>
    );
}
