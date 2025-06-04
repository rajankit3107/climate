import { useState } from "react";
import { Button } from "./ui/button";
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "./ui/command";
import { Search } from "lucide-react";
import { useLocationSearch } from "@/hooks/use-weather";
import { useNavigate } from "react-router-dom";

export const CitySearch = () => {
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState("");
    const navigate = useNavigate();
    const { data: locations, isLoading } = useLocationSearch(query);

    const handleSelect = (cityData: string) => {
        const [lat, lon, name] = cityData.split("|");
        setOpen(false);
        navigate(`/city/${name}?lat=${lat}&lon=${lon}`);
    };

    return (
        <>
            <Button
                variant={"outline"}
                className="cursor-pointer relative w-full justify-start text-sm text-muted-foreground sm:pr-12 md:w-40 lg:w-64"
                onClick={() => setOpen(true)}
            >
                <Search className="mr-2 h-4 w-4" />
                Search cities...
            </Button>
            <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput 
                    placeholder="Search for a city..." 
                    value={query}
                    onValueChange={setQuery}
                />
                <CommandList>
                    {query.length > 2 && !isLoading && (
                        <CommandEmpty>No cities found.</CommandEmpty>
                    )}
                    <CommandGroup heading="Results">
                        {isLoading ? (
                            <CommandItem disabled>Loading...</CommandItem>
                        ) : (
                            locations?.map((location) => (
                                <CommandItem
                                    key={`${location.lat}-${location.lon}`}
                                    value={`${location.lat}|${location.lon}|${location.name}`}
                                    onSelect={handleSelect}
                                >
                                    <Search className="mr-2 h-4 w-4" />
                                    <span>{location.name}</span>
                                    {location.state && (
                                        <span className="text-sm text-muted-foreground">
                                            , {location.state}
                                        </span>
                                    )}
                                    <span className="text-sm text-muted-foreground">
                                        , {location.country}
                                    </span>
                                </CommandItem>
                            ))
                        )}
                    </CommandGroup>
                </CommandList>
            </CommandDialog>
        </>
    );
};
