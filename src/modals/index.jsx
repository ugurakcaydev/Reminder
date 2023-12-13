import { useModal } from "../store/modal/hooks";
import { removeModal } from "../store/modal/actions";
import modals from "../routes/modals";
import classNames from "classnames";

export default function Modal() {
  const modal = useModal();
  const currentModal = modals.find((m) => m.name === modal.name);
  return (
    <div className="fixed inset-0 bg-[color:var(--bg-modal)] flex items-center justify-center z-30">
      <div
        className={classNames(
          "bg-[color:var(--bg-primary)] w-[900px]  max-h-[90vh]  rounded-2xl"
        )}
      >
        {currentModal && (
          <currentModal.element close={removeModal} post={modal.data} />
        )}
      </div>
    </div>
  );
}
