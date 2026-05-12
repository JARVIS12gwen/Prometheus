import { 
  ChevronLeft, 
  ChevronRight, 
  Cpu, 
  Scale, 
  Zap, 
  Users, 
  Heart, 
  TrendingUp, 
  Globe, 
  Briefcase 
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  useCarousel,
} from '@/components/ui/carousel';
import { cn, DASHBOARD_CONTENT_PADDING_X } from '@/lib/utils';

type CategoryFilterCarouselProps = {
  categories: string[];
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
  className?: string;
};

const CarouselContentWithButtons = ({
  className,
  categories,
  selectedCategory,
  onCategorySelect,
}: CategoryFilterCarouselProps) => {
  const { canScrollNext, canScrollPrev } = useCarousel();

  return (
    <div
      className={`relative my-4 transition-[padding] duration-200 py-3 border-b border-t `}
      style={{
        paddingLeft: canScrollPrev ? '3rem' : '0',
        paddingRight: canScrollNext ? '3rem' : '0',
      }}
    >
      <CarouselContent className={cn('-ml-2 gap-1', className)}>
        {categories.map((category) => {
          const isSelected = selectedCategory === category;
          const getCategoryIcon = (cat: string) => {
            const lower = cat.toLowerCase();
            if (lower.includes('it')) return <Cpu className="w-4 h-4 mr-2" />;
            if (lower.includes('legal')) return <Scale className="w-4 h-4 mr-2" />;
            if (lower.includes('customer')) return <Heart className="w-4 h-4 mr-2" />;
            if (lower.includes('sales')) return <TrendingUp className="w-4 h-4 mr-2" />;
            if (lower.includes('featured')) return <Zap className="w-4 h-4 mr-2" />;
            if (lower.includes('everyday')) return <Globe className="w-4 h-4 mr-2" />;
            if (lower.includes('marketing')) return <Users className="w-4 h-4 mr-2" />;
            return <Briefcase className="w-4 h-4 mr-2" />;
          };

          return (
            <CarouselItem key={category} className="basis-auto pl-2">
              <Button
                variant="outline"
                onClick={() => onCategorySelect(category)}
                className={`px-4 py-1.5 h-auto whitespace-nowrap transition-all duration-300 flex items-center ${
                  isSelected
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white border-none hover:shadow-[0_0_15px_rgba(37,99,235,0.4)]'
                    : 'bg-transparent hover:!bg-sidebar-accent hover:!text-sidebar-accent-foreground border-none'
                }`}
              >
                {getCategoryIcon(category)}
                {category}
              </Button>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      {canScrollPrev && (
        <CarouselPrevious variant="ghost" className="left-0 z-10">
          <ChevronLeft className="h-4 w-4" />
        </CarouselPrevious>
      )}
      {canScrollNext && (
        <CarouselNext variant="ghost" className="right-0 z-10">
          <ChevronRight className="h-4 w-4" />
        </CarouselNext>
      )}
    </div>
  );
};

export const CategoryFilterCarousel = ({
  categories,
  selectedCategory,
  onCategorySelect,
}: CategoryFilterCarouselProps) => {
  return (
    <Carousel
      opts={{
        align: 'start',
        loop: false,
      }}
      className="w-full"
    >
      <CarouselContentWithButtons
        className={DASHBOARD_CONTENT_PADDING_X}
        categories={categories}
        selectedCategory={selectedCategory}
        onCategorySelect={onCategorySelect}
      />
    </Carousel>
  );
};
