

type  Props = {
    handleChange:(t:any) => void
    sousTitre: string
    checked:any
}
export const SideBarItem=({handleChange,sousTitre,checked}:Props)=> {
    return (
            <div className="flex items-center m-4">
                <input type="checkbox" id="price"
                       className="rounded-full text-white" style={{width:20,height:20}}
                       onChange={handleChange}
                       checked={checked}
                />
                <label htmlFor="price" className="text-2xl ml-3">{sousTitre}</label>
            </div>
    );
};