export default function SidebarOption1() {
  return (
    <div className="w-56 bg-[#fafafa] p-6">
      <h3 className="text-xl font-semibold text-[#000000] mb-8">Explore</h3>
      <div className="space-y-1">
        <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-[#f3f3f3] transition-colors cursor-pointer">
          <div className="w-2 h-2 bg-[#ea0025] rounded-full"></div>
          <span className="text-[#333333] text-sm font-medium">Violins</span>
        </div>
        <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-[#f3f3f3] transition-colors cursor-pointer">
          <div className="w-2 h-2 bg-[#333333] rounded-full"></div>
          <span className="text-[#333333] text-sm font-medium">Bows</span>
        </div>
        <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-[#f3f3f3] transition-colors cursor-pointer">
          <div className="w-2 h-2 bg-[#878787] rounded-full"></div>
          <span className="text-[#333333] text-sm font-medium">Cases</span>
        </div>
        <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-[#f3f3f3] transition-colors cursor-pointer">
          <div className="w-2 h-2 bg-[#000000] rounded-full"></div>
          <span className="text-[#333333] text-sm font-medium">Accessories</span>
        </div>
        <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-[#f3f3f3] transition-colors cursor-pointer">
          <div className="w-2 h-2 bg-[#ea0025] rounded-full"></div>
          <span className="text-[#333333] text-sm font-medium">Sheet Music</span>
        </div>
        <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-[#f3f3f3] transition-colors cursor-pointer">
          <div className="w-2 h-2 bg-[#333333] rounded-full"></div>
          <span className="text-[#333333] text-sm font-medium">Featured</span>
        </div>
        <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-[#f3f3f3] transition-colors cursor-pointer">
          <div className="w-2 h-2 bg-[#878787] rounded-full"></div>
          <span className="text-[#333333] text-sm font-medium">Inspiration</span>
        </div>
      </div>
    </div>
  )
}
