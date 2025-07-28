import React, { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { searchMajors, universitiesData } from '@/data/universitiesData';
import { Link } from 'react-router-dom';

interface SearchBoxProps {
  onSearch?: (query: string) => void;
}

const SearchBox = ({ onSearch }: SearchBoxProps) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (query.length > 2) {
      const results = searchMajors(query).slice(0, 5);
      const universityResults = universitiesData
        .filter(uni => uni.name.toLowerCase().includes(query.toLowerCase()))
        .slice(0, 3);
      
      setSuggestions([
        ...results.map(r => ({ type: 'major', ...r })),
        ...universityResults.map(uni => ({ type: 'university', university: uni }))
      ]);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = () => {
    if (onSearch) {
      onSearch(query);
    }
    setShowSuggestions(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const clearSearch = () => {
    setQuery('');
    setSuggestions([]);
    setShowSuggestions(false);
    if (onSearch) {
      onSearch('');
    }
  };

  return (
    <div ref={searchRef} className="relative w-full max-w-2xl mx-auto">
      <div className="relative">
        <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
        <Input
          type="text"
          placeholder="ابحث عن تخصص أو جامعة..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          className="pl-12 pr-10 h-12 text-lg font-secondary border-2 border-primary/20 focus:border-primary"
        />
        {query && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearSearch}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0"
          >
            <X className="w-4 h-4" />
          </Button>
        )}
      </div>

      {showSuggestions && suggestions.length > 0 && (
        <Card className="absolute top-full left-0 right-0 mt-2 z-50 shadow-elegant">
          <CardContent className="p-2">
            {suggestions.map((suggestion, index) => (
              <Link
                key={index}
                to={suggestion.type === 'major' 
                  ? `/major/${suggestion.major.id}` 
                  : `/majors/universities/${suggestion.university.id}`
                }
                onClick={() => setShowSuggestions(false)}
                className="block w-full"
              >
                <div className="flex items-center space-x-reverse space-x-3 p-3 hover:bg-muted/50 rounded-lg transition-colors">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    {suggestion.type === 'major' ? (
                      <Search className="w-4 h-4 text-primary" />
                    ) : (
                      <div className="w-2 h-2 bg-secondary rounded-full" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="font-primary font-semibold text-foreground">
                      {suggestion.type === 'major' ? suggestion.major.name : suggestion.university.name}
                    </div>
                    <div className="text-sm font-secondary text-muted-foreground">
                      {suggestion.type === 'major' 
                        ? `${suggestion.university.name} - ${suggestion.college.name}`
                        : suggestion.university.description
                      }
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default SearchBox;