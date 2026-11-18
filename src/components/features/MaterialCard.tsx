import { Material } from '@/types';
import { Package, AlertTriangle, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface MaterialCardProps {
  material: Material;
}

const categoryIcons = {
  cement: '🏗️',
  steel: '⚙️',
  bricks: '🧱',
  other: '📦',
};

export function MaterialCard({ material }: MaterialCardProps) {
  const isLowStock = material.quantity < material.threshold;
  const stockPercentage = (material.quantity / (material.threshold * 2)) * 100;

  return (
    <Card className={`hover:shadow-lg transition-shadow ${isLowStock ? 'border-l-4 border-red-500' : 'border-l-4 border-construction-yellow'}`}>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">{categoryIcons[material.category]}</span>
            <CardTitle className="text-lg font-bold">{material.name}</CardTitle>
          </div>
          {isLowStock && (
            <Badge variant="destructive" className="flex items-center gap-1">
              <AlertTriangle className="h-3 w-3" />
              Low Stock
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Quantity Display */}
        <div className="bg-construction-yellow/10 p-4 rounded-lg border-2 border-construction-yellow">
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-bold text-construction-black">
              {material.quantity.toLocaleString()}
            </span>
            <span className="text-lg text-muted-foreground">{material.unit}</span>
          </div>
          <p className="text-sm text-muted-foreground mt-1">Current Stock</p>
        </div>

        {/* Stock Level Bar */}
        <div>
          <div className="flex items-center justify-between mb-2 text-sm">
            <span className="font-medium">Stock Level</span>
            <span className="text-muted-foreground">
              Threshold: {material.threshold} {material.unit}
            </span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className={`h-full transition-all ${isLowStock ? 'bg-red-500' : 'bg-green-500'}`}
              style={{ width: `${Math.min(stockPercentage, 100)}%` }}
            />
          </div>
        </div>

        {/* Footer Info */}
        <div className="flex items-center justify-between pt-2 border-t text-sm">
          <div className="flex items-center gap-1 text-muted-foreground">
            <Package className="h-4 w-4" />
            <span className="capitalize">{material.category}</span>
          </div>
          <div className="text-muted-foreground">
            Updated: {new Date(material.lastUpdated).toLocaleDateString()}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
