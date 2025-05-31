import { Music, ArrowRight, Package, Settings, FileText, Star, Lightbulb } from "lucide-react"

export default function SidebarOption2() {
  return (
    <div className="w-56 bg-[#fafafa] p-6">
      <h3 className="text-xl font-semibold text-[#000000] mb-8">Explore</h3>
      <div className="space-y-1">
        <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-[#f3f3f3] transition-colors cursor-pointer">
          <Music className="w-4 h-4 text-[#878787]" />
          <span className="text-[#333333] text-sm font-medium">Violins</span>
        </div>
        <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-[#f3f3f3] transition-colors cursor-pointer">
          <ArrowRight className="w-4 h-4 text-[#878787]" />
          <span className="text-[#333333] text-sm font-medium">Bows</span>
        </div>
        <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-[#f3f3f3] transition-colors cursor-pointer">
          <Package className="w-4 h-4 text-[#878787]" />
          <span className="text-[#333333] text-sm font-medium">Cases</span>
        </div>
        <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-[#f3f3f3] transition-colors cursor-pointer">
          <Settings className="w-4 h-4 text-[#878787]" />
          <span className="text-[#333333] text-sm font-medium">Accessories</span>
        </div>
        <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-[#f3f3f3] transition-colors cursor-pointer">
          <FileText className="w-4 h-4 text-[#878787]" />
          <span className="text-[#333333] text-sm font-medium">Sheet Music</span>
        </div>
        <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-[#f3f3f3] transition-colors cursor-pointer">
          <Star className="w-4 h-4 text-[#878787]" />
          <span className="text-[#333333] text-sm font-medium">Featured</span>
        </div>
        <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-[#f3f3f3] transition-colors cursor-pointer">
          <Lightbulb className="w-4 h-4 text-[#878787]" />
          <span className="text-[#333333] text-sm font-medium">Inspiration</span>
        </div>
      </div>
    </div>
  )
}
