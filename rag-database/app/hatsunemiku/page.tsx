
export default function hatsunemiku() {
    return (
        <div className="flex flex-col justify-center items-center h-[90vh] p-10 overflow-auto">
            <img src="https://media1.tenor.com/m/8JhcC4OtwC8AAAAC/hatsune-miku-dance.gif" alt="https://github.com/EYXLiu" width={500} height={500} />
            <div>Backend is probably down because I can't afford a good enough host to run sentence_transformers but check out the source code !!</div>
            <div className="flex space-x-4 mt-4"> 
                <a href="https://github.com/EYXLiu/RAG_Database_Backend" className="text-blue-500 hover:underline" target="_blank">Backend</a> 
                <a href="https://github.com/EYXLiu/RAG_Database_Website" className="text-blue-500 hover:underline" target="_blank">Frontend</a> 
            </div>
        </div>
    )
}