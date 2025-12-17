export default function Footer () {
    return (
        <footer className="w-full border-t border-black/10 mt-16">
            <div className="mx-auto max-w-6x1 px-6 py-6 text-sm">
              © {new Date().getFullYear()} Ateliê CKaizen
            </div>
        </footer>
    );
}