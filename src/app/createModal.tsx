export default function CreateModal({open, onClose, children}: {open: boolean, onClose: any, children: any}) {
    return(
        <div className={`fixed inset-0 flex justify-center items-center transition-colors ${open ? 'visibe bg-black/20' : 'invisible'}`}> {children}
        </div>
        
    )
};