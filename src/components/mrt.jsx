import { MaterialReactTable, useMaterialReactTable} from 'material-react-table';
import { useMemo } from 'react';

const data = [
    {
      region: 'Central',
      nodecount: 30,
      hhp: 153,
      walkout: 2,
      design: 48,
      permit: 78,
      buildcoordination: 75,
      activation: 48,
      postactivation: 78,
      percentcomplete: 16,
      pyrunrate: 3.33,
      total: 94,
      green: 94,
      yellow: 6,
      red: 0
    },
    {
      region: 'Central',
      nodecount: 30,
      hhp: 153,
      walkout: 2,
      design: 48,
      permit: 78,
      buildcoordination: 75,
      activation: 48,
      postactivation: 78,
      percentcomplete: 16,
      pyrunrate: 3.33,
      total: 94,
      green: 94,
      yellow: 6,
      red: 0
    },
    {
        region: 'Central',
        nodecount: 30,
        hhp: 153,
        walkout: 2,
        design: 48,
        permit: 78,
        buildcoordination: 75,
        activation: 48,
        postactivation: 78,
        percentcomplete: 16,
        pyrunrate: 3.33,
        total: 94,
        green: 94,
        yellow: 6,
        red: 0
    },
    {
    region: 'Central',
    nodecount: 30,
    hhp: 153,
    walkout: 2,
    design: 48,
    permit: 78,
    buildcoordination: 75,
    activation: 48,
    postactivation: 78,
    percentcomplete: 16,
    pyrunrate: 3.33,
    total: 94,
    green: 94,
    yellow: 6,
    red: 0
    },
    {
    region: 'Central',
    nodecount: 30,
    hhp: 153,
    walkout: 2,
    design: 48,
    permit: 78,
    buildcoordination: 75,
    activation: 48,
    postactivation: 78,
    percentcomplete: 16,
    pyrunrate: 3.33,
    total: 94,
    green: 94,
    yellow: 6,
    red: 0
    },
    {
    region: 'Central',
    nodecount: 30,
    hhp: 153,
    walkout: 2,
    design: 48,
    permit: 78,
    buildcoordination: 75,
    activation: 48,
    postactivation: 78,
    percentcomplete: 16,
    pyrunrate: 3.33,
    total: 94,
    green: 94,
    yellow: 6,
    red: 0
    },
    {
    region: 'Central',
    nodecount: 30,
    hhp: 153,
    walkout: 2,
    design: 48,
    permit: 78,
    buildcoordination: 75,
    activation: 48,
    postactivation: 78,
    percentcomplete: 16,
    pyrunrate: 3.33,
    total: 94,
    green: 94,
    yellow: 6,
    red: 0
    },
    {
    region: 'Central',
    nodecount: 30,
    hhp: 153,
    walkout: 2,
    design: 48,
    permit: 78,
    buildcoordination: 75,
    activation: 48,
    postactivation: 78,
    percentcomplete: 16,
    pyrunrate: 3.33,
    total: 94,
    green: 94,
    yellow: 6,
    red: 0
    }
  ];

export default function MRT() {
    const columns = useMemo(
    () => [
        {
          header: 'Region/Market',
          accessorKey: 'region',
        },
        {
          header: 'Node Count',
          accessorKey: 'nodecount',
        },
        {
            header: 'HHP',
            accessorKey: 'hhp',
        },
        {
          header: 'Walkout',
          accessorKey: 'walkout',
        },
        {
        header: 'Design',
        accessorKey: 'design',
        },
        {
        header: 'Permit',
        accessorKey: 'permit',
        },
        {
        header: 'Build Coordiantion',
        accessorKey: 'buildcoordination',
        },
        {
        header: 'Activation',
        accessorKey: 'activation',
        },
        {
        header: 'Post Activation',
        accessorKey: 'postactivation',
        },
        {
        header: '% Complete',
        accessorKey: 'percentcomplete',
        },
        {
        header: 'PY Run Rate',
        accessorKey: 'pyrunrate',
        },
        {
        header: 'Project Health',
        accessorKey: 'total',
        },
      ],
      [],
    )

    const table = useMaterialReactTable({
        columns,
        data, 
        // enableRowSelection: true, //enable some features
        enableTopToolbar: false,
        enablePagination: false,
        enableTableFooter: false,
        enableColumnActions: false,
        enableSorting: false,
        muiTableHeadCellProps: {
            sx: {
              background: '#ebeff0'
            },
        },
        enableColumnPinning: true,
        // layoutMode: 'grid-no-grow',
        initialState: {
            columnPinning: { left: ['region'], right: ['total'] },
        },
      });

    return <MaterialReactTable table={table} />;
};