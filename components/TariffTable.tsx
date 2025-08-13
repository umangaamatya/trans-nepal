interface TariffRow {
  sn: string;
  activity: string;
  vehicle?: string;
  teu?: string;
  feu?: string;
  charges?: string;
}

interface TariffTableProps {
  headers: string[];
  rows: TariffRow[];
  className?: string;
}

export function TariffTable({ headers, rows, className = "" }: TariffTableProps) {
  return (
    <div className={`w-full mb-10 ${className}`}>
      {/* Desktop Table */}
      <div className="hidden lg:block relative w-full max-w-[1098px] border border-[#171F45]">
        {/* Header */}
        <div className="w-full h-[37px] bg-[rgba(54,66,124,0.90)] flex items-center">
          <div className="flex-none w-[80px] text-center text-white font-poppins text-[18px] font-bold leading-normal">
            {headers[0]}
          </div>
          <div className="flex-1 text-center text-white font-poppins text-[18px] font-bold leading-normal">
            {headers[1]}
          </div>
          {headers[2] && (
            <div className="flex-none w-[120px] text-center text-white font-poppins text-[14px] font-bold leading-normal">
              {headers[2]}
            </div>
          )}
          {headers[3] && (
            <div className="flex-none w-[80px] text-center text-white font-poppins text-[18px] font-bold leading-normal">
              {headers[3]}
            </div>
          )}
          {headers[4] && (
            <div className="flex-none w-[80px] text-center text-white font-poppins text-[18px] font-bold leading-normal">
              {headers[4]}
            </div>
          )}
          {headers[5] && (
            <div className="flex-none w-[80px] text-center text-white font-poppins text-[18px] font-bold leading-normal">
              {headers[5]}
            </div>
          )}
        </div>

        {/* Rows */}
        {rows.map((row, index) => (
          <div 
            key={index}
            className="flex w-full min-h-[44px] items-center border-b border-[rgba(0,0,0,0.26)] last:border-b-0"
          >
            <div className="flex-none w-[80px] text-center text-[#171f45] font-poppins text-[15px] font-normal leading-normal py-2">
              {row.sn}
            </div>
            <div className="flex-1 px-4 text-[#171f45] font-poppins text-[15px] font-normal leading-normal py-2">
              {row.activity}
            </div>
            {(row.charges !== undefined || headers[2]) && (
              <div className="flex-none w-[120px] text-center text-[#171f45] font-poppins text-[15px] font-normal leading-normal py-2">
                {row.charges || row.vehicle || ""}
              </div>
            )}
            {(row.vehicle !== undefined && !row.charges && headers[3]) && (
              <div className="flex-none w-[80px] text-center text-[#171f45] font-poppins text-[15px] font-normal leading-normal py-2">
                {row.vehicle}
              </div>
            )}
            {(row.teu !== undefined) && (
              <div className="flex-none w-[80px] text-center text-[#171f45] font-poppins text-[15px] font-normal leading-normal py-2">
                {row.teu}
              </div>
            )}
            {(row.feu !== undefined) && (
              <div className="flex-none w-[80px] text-center text-[#171f45] font-poppins text-[15px] font-normal leading-normal py-2">
                {row.feu}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile Table */}
      <div className="lg:hidden">
        {/* Header */}
        <div className="w-full h-[37px] bg-[rgba(54,66,124,0.90)] flex items-center px-4 mb-2">
          <span className="text-white font-poppins text-[16px] font-bold leading-normal">
            Tariff Information
          </span>
        </div>

        {/* Mobile Cards */}
        {rows.map((row, index) => (
          <div key={index} className="bg-white border border-[#171F45] rounded-lg p-4 mb-3">
            <div className="flex items-start gap-3">
              <div className="flex-none w-8 h-8 bg-[#283b9a] rounded-full flex items-center justify-center">
                <span className="text-white font-poppins text-[14px] font-bold">{row.sn}</span>
              </div>
              <div className="flex-1">
                <div className="text-[#171f45] font-poppins text-[14px] font-normal leading-[20px] mb-3">
                  {row.activity}
                </div>
                <div className="grid grid-cols-2 gap-2 text-[12px]">
                  {(row.vehicle || row.charges) && (
                    <div>
                      <span className="text-[#283b9a] font-poppins font-semibold">
                        {row.charges ? 'Charges: ' : 'Vehicle: '}
                      </span>
                      <span className="text-[#171f45] font-poppins">
                        {row.charges || row.vehicle}
                      </span>
                    </div>
                  )}
                  {row.teu && (
                    <div>
                      <span className="text-[#283b9a] font-poppins font-semibold">TEU: </span>
                      <span className="text-[#171f45] font-poppins">{row.teu}</span>
                    </div>
                  )}
                  {row.feu && (
                    <div>
                      <span className="text-[#283b9a] font-poppins font-semibold">FEU: </span>
                      <span className="text-[#171f45] font-poppins">{row.feu}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
