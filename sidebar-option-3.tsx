export default function SidebarOption3() {
  return (
    <div className="w-56 bg-[#fafafa] p-6">
      <h3 className="text-xl font-semibold text-[#000000] mb-8">Explore</h3>
      <div className="space-y-1">
        <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-[#f3f3f3] transition-colors cursor-pointer">
          <div className="w-6 h-6 bg-[#000000] text-white text-xs font-semibold rounded flex items-center justify-center">
            V
          </div>
          <span className="text-[#333333] text-sm font-medium">Violins</span>
        </div>
        <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-[#f3f3f3] transition-colors cursor-pointer">
          <div className="w-6 h-6 bg-[#333333] text-white text-xs font-semibold rounded flex items-center justify-center">
            B
          </div>
          <span className="text-[#333333] text-sm font-medium">Bows</span>
        </div>
        <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-[#f3f3f3] transition-colors cursor-pointer">
          <div className="w-6 h-6 bg-[#878787] text-white text-xs font-semibold rounded flex items-center justify-center">
            C
          </div>
          <span className="text-[#333333] text-sm font-medium">Cases</span>
        </div>
        <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-[#f3f3f3] transition-colors cursor-pointer">
          <div className="w-6 h-6 bg-[#ea0025] text-white text-xs font-semibold rounded flex items-center justify-center">
            A
          </div>
          <span className="text-[#333333] text-sm font-medium">Accessories</span>
        </div>
        <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-[#f3f3f3] transition-colors cursor-pointer">
          <div className="w-6 h-6 bg-[#000000] text-white text-xs font-semibold rounded flex items-center justify-center">
            S
          </div>
          <span className="text-[#333333] text-sm font-medium">Sheet Music</span>
        </div>
        <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-[#f3f3f3] transition-colors cursor-pointer">
          <div className="w-6 h-6 bg-[#333333] text-white text-xs font-semibold rounded flex items-center justify-center">
            F
          </div>
          <span className="text-[#333333] text-sm font-medium">Featured</span>
        </div>
        <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-[#f3f3f3] transition-colors cursor-pointer">
          <div className="w-6 h-6 bg-[#878787] text-white text-xs font-semibold rounded flex items-center justify-center">
            I
          </div>
          <span className="text-[#333333] text-sm font-medium">Inspiration</span>
        </div>
      </div>
    </div>
  )
}
