import { Badge } from "@/components/ui/badge";
import { Category } from "@prisma/client";
import { KeyboardIcon } from "lucide-react";

interface CategoryItemProps {
  category: Category
}

const CategoryItem = ({category}: CategoryItemProps) => {
  return (  
    <Badge variant="outline">
      <KeyboardIcon />
      <span className="font-bold text-xs">{category.name}</span>
    </Badge>

  );
}
 
export default CategoryItem;
