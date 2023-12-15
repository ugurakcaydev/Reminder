import { useModal } from "../store/modal/hooks";
import { removeModal } from "../store/modal/actions";
import modals from "../routes/modals";
import classNames from "classnames";

export default function Modal() {
  const modal = useModal();
  const currentModal = modals.find((m) => m.name === modal.name);
  return (
    <div className="fixed  inset-0 bg-[color:var(--bg-modal)] flex items-center justify-center z-30">
      
        <div
          className={classNames(
            "bg-[#232E35] w-[900px] max-h-[90vh] rounded-2xl relative  ",
          
          )}
        >
          {currentModal && (
            <currentModal.element close={removeModal} />
          )}
        </div>
    
    </div>
  );
}
