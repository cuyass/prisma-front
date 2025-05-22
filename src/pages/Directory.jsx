import React, { useEffect, useState } from 'react';
import { Search, MapPin, Shield, Heart, Globe } from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/buttons/Button';
import Pagination from '../components/Pagination';

const Directory = () => {
    const [resources, setResources] = useState([]);
    const [activeFilter, setActiveFilter] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [regionFilter, setRegionFilter] = useState('all');
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);

const resourcesPerPage = 8;

    useEffect(() => {
        fetch('/data/directory.json')
            .then((res) => res.json())
            .then((data) => {
                setResources(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error al carregar els recursos:', error);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        setCurrentPage(1);
    }, [activeFilter, regionFilter, searchTerm]);
    
    const categories = [
        { id: 'all', name: 'Tots els Recursos', icon: Globe, color: 'text-gray-700' },
        { id: 'lgbt', name: 'Recursos LGBTQ+', icon: Heart, color: 'text-purple-500' },
        { id: 'security', name: 'Ciberseguretat', icon: Shield, color: 'text-blue-500' },
    ];

    const regions = [
        { id: 'all', name: 'Totes les Regions' },
        { id: 'catalunya', name: 'Catalunya' },
        { id: 'spain', name: 'Espanya' },
    ];

    const filteredResources = resources.filter((resource) => {
        const matchesCategory = activeFilter === 'all' || resource.category === activeFilter;
        const matchesRegion = regionFilter === 'all' || resource.region === regionFilter;
        const matchesSearch =
            resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            resource.description.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesRegion && matchesSearch;
    });

    const indexOfLastResource = currentPage * resourcesPerPage;
    const indexOfFirstResource = indexOfLastResource - resourcesPerPage;
    const paginatedResources = filteredResources.slice(indexOfFirstResource, indexOfLastResource);
    const totalPages = Math.ceil(filteredResources.length / resourcesPerPage);

    return (
        <div className="min-h-screen bg-base-200">
            <div className="bg-gradient-to-r from-pink-400 via-orange-300 to-blue-300 h-2"></div>

            <div className="container mx-auto px-4 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-[Righteous] mb-4">Directori de Recursos</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Recursos LGBTQ+ i de ciberseguretat a Catalunya i Espanya per a protegir les identitats digitals.
                    </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 mb-10 shadow-sm">
                    <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                        <div className="relative w-full md:w-1/3">
                            <input
                                type="text"
                                placeholder="Cerca recursos..."
                                className="input input-bordered w-full pl-10"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <Search className="absolute left-3 top-3 text-gray-400" size={20} />
                        </div>

                        <div className="flex flex-wrap justify-center gap-2">
                            {categories.map((category) => (
                                <Button
                                    key={category.id}
                                    onClick={() => setActiveFilter(category.id)}
                                    variant={activeFilter === category.id ? 'primary' : 'neutral'}
                                >
                                    <category.icon className={category.color} size={18} />
                                    <span className="ml-2">{category.name}</span>
                                </Button>
                            ))}
                        </div>

                        <div className="flex items-center gap-2">
                            <MapPin size={20} className="text-gray-500" />
                            <select
                                className="select select-bordered"
                                value={regionFilter}
                                onChange={(e) => setRegionFilter(e.target.value)}
                            >
                                {regions.map((region) => (
                                    <option key={region.id} value={region.id}>
                                        {region.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                {loading ? (
                    <div className="text-center py-20 text-gray-500 text-lg">Carregant recursos...</div>
                ) : (
                    <>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {paginatedResources.length > 0 ? (
                            paginatedResources.map((resource) => (
                                <Card
                                    key={resource.id}
                                    image={resource.imgSrc}
                                    title={resource.title}
                                    description={resource.description}
                                    actionText="Visitar"
                                    onClick={() => window.open(resource.url, '_blank')}
                                />
                            ))
                        ) : (
                            <div className="col-span-full text-center py-16">
                                <h3 className="text-xl font-semibold text-gray-500">
                                    No s'han trobat recursos que coincideixin amb els criteris de cerca.
                                </h3>
                                <Button className="mt-4" onClick={() => {
                                    setActiveFilter('all');
                                    setRegionFilter('all');
                                    setSearchTerm('');
                                }}>
                                    Restablir filtres
                                </Button>
                            </div>
                        )}
                    </div>
                    {totalPages > 1 && (
                            <Pagination
                                currentPage={currentPage}
                                totalPages={totalPages}
                                onPageChange={setCurrentPage}
                            />
                        )}
                    </>
                )}
            </div>

            <div className="bg-gradient-to-r from-purple-100 to-blue-100 py-12 px-4 mt-16">
                <div className="container mx-auto text-center">
                    <h2 className="text-2xl font-bold mb-4">Coneixes algun recurs que hauria d'estar aquí?</h2>
                    <p className="text-gray-600 max-w-xl mx-auto mb-6">
                        Ajuda'ns a millorar aquest directori recomanant recursos LGBTQ+ i de ciberseguretat que consideris valuosos per a la comunitat. Escriu-nos a <span className=" underline">holaprisma@protonmail.com</span>
                    </p>
                    <p className="text-gray-600 max-w-xl mx-auto mb-2">També pots clicar aquí</p>
                    <a href="mailto:holaprisma@protonmail.com">
                        <Button variant="accent">Suggerir un Recurs</Button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Directory;
