import Breadcrumb from '@/Components/Breadcrumb/Breadcrumb'


const Favourite = () => {
    return (
        <div>
            {/* Breadcrumb Section */}
            <div className="max-w-7xl mx-auto px-6 pt-8">
                <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Favourite", href: "/favourite" }]} />
            </div>
        </div>
    )
}

export default Favourite