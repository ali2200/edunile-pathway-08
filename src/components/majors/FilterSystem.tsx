import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Filter, X } from 'lucide-react';
import { fieldsData } from '@/data/universitiesData';

interface FilterSystemProps {
  filters: {
    field?: string;
    universityType?: 'government' | 'private';
    duration?: string;
    language?: string;
    internationalOnly?: boolean;
  };
  onFilterChange: (filters: any) => void;
  onClearFilters: () => void;
}

const FilterSystem = ({ filters, onFilterChange, onClearFilters }: FilterSystemProps) => {
  const updateFilter = (key: string, value: any) => {
    onFilterChange({
      ...filters,
      [key]: value
    });
  };

  const removeFilter = (key: string) => {
    const newFilters = { ...filters };
    delete newFilters[key as keyof typeof newFilters];
    onFilterChange(newFilters);
  };

  const getActiveFiltersCount = () => {
    return Object.keys(filters).filter(key => filters[key as keyof typeof filters]).length;
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center justify-between font-primary">
          <div className="flex items-center space-x-reverse space-x-2">
            <Filter className="w-5 h-5 text-primary" />
            <span>تصفية النتائج</span>
            {getActiveFiltersCount() > 0 && (
              <Badge variant="secondary" className="text-xs">
                {getActiveFiltersCount()}
              </Badge>
            )}
          </div>
          {getActiveFiltersCount() > 0 && (
            <Button
              variant="outline"
              size="sm"
              onClick={onClearFilters}
              className="text-xs"
            >
              <X className="w-3 h-3 ml-1" />
              مسح الكل
            </Button>
          )}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Active Filters */}
        {getActiveFiltersCount() > 0 && (
          <div className="flex flex-wrap gap-2">
            {filters.field && (
              <Badge variant="outline" className="flex items-center gap-1">
                <span className="text-xs">{fieldsData.find(f => f.id === filters.field)?.name}</span>
                <X 
                  className="w-3 h-3 cursor-pointer" 
                  onClick={() => removeFilter('field')}
                />
              </Badge>
            )}
            {filters.universityType && (
              <Badge variant="outline" className="flex items-center gap-1">
                <span className="text-xs">
                  {filters.universityType === 'government' ? 'حكومية' : 'خاصة'}
                </span>
                <X 
                  className="w-3 h-3 cursor-pointer" 
                  onClick={() => removeFilter('universityType')}
                />
              </Badge>
            )}
            {filters.duration && (
              <Badge variant="outline" className="flex items-center gap-1">
                <span className="text-xs">{filters.duration}</span>
                <X 
                  className="w-3 h-3 cursor-pointer" 
                  onClick={() => removeFilter('duration')}
                />
              </Badge>
            )}
            {filters.language && (
              <Badge variant="outline" className="flex items-center gap-1">
                <span className="text-xs">{filters.language}</span>
                <X 
                  className="w-3 h-3 cursor-pointer" 
                  onClick={() => removeFilter('language')}
                />
              </Badge>
            )}
            {filters.internationalOnly && (
              <Badge variant="outline" className="flex items-center gap-1">
                <span className="text-xs">للطلاب الدوليين</span>
                <X 
                  className="w-3 h-3 cursor-pointer" 
                  onClick={() => removeFilter('internationalOnly')}
                />
              </Badge>
            )}
          </div>
        )}

        {/* Filter Controls */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Field Filter */}
          <div className="space-y-2">
            <Label className="text-sm font-primary font-semibold">المجال</Label>
            <Select 
              value={filters.field || ''} 
              onValueChange={(value) => updateFilter('field', value)}
            >
              <SelectTrigger className="font-secondary">
                <SelectValue placeholder="اختر المجال" />
              </SelectTrigger>
              <SelectContent>
                {fieldsData.map((field) => (
                  <SelectItem key={field.id} value={field.id}>
                    {field.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* University Type Filter */}
          <div className="space-y-2">
            <Label className="text-sm font-primary font-semibold">نوع الجامعة</Label>
            <Select 
              value={filters.universityType || ''} 
              onValueChange={(value) => updateFilter('universityType', value)}
            >
              <SelectTrigger className="font-secondary">
                <SelectValue placeholder="اختر النوع" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="government">حكومية</SelectItem>
                <SelectItem value="private">خاصة</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Duration Filter */}
          <div className="space-y-2">
            <Label className="text-sm font-primary font-semibold">مدة الدراسة</Label>
            <Select 
              value={filters.duration || ''} 
              onValueChange={(value) => updateFilter('duration', value)}
            >
              <SelectTrigger className="font-secondary">
                <SelectValue placeholder="اختر المدة" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2 سنة">سنتان</SelectItem>
                <SelectItem value="4 سنوات">4 سنوات</SelectItem>
                <SelectItem value="5 سنوات">5 سنوات</SelectItem>
                <SelectItem value="6 سنوات">6 سنوات</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Language Filter */}
          <div className="space-y-2">
            <Label className="text-sm font-primary font-semibold">لغة الدراسة</Label>
            <Select 
              value={filters.language || ''} 
              onValueChange={(value) => updateFilter('language', value)}
            >
              <SelectTrigger className="font-secondary">
                <SelectValue placeholder="اختر اللغة" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="العربية">العربية</SelectItem>
                <SelectItem value="الإنجليزية">الإنجليزية</SelectItem>
                <SelectItem value="العربية/الإنجليزية">العربية/الإنجليزية</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* International Students Filter */}
          <div className="space-y-2">
            <div className="flex items-center space-x-reverse space-x-2">
              <Switch
                id="international"
                checked={filters.internationalOnly || false}
                onCheckedChange={(checked) => updateFilter('internationalOnly', checked)}
              />
              <Label htmlFor="international" className="text-sm font-primary font-semibold">
                متاح للطلاب الدوليين فقط
              </Label>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FilterSystem;