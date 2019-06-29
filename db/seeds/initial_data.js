const benefit = [
  {
    id: 1,
    name: 'Netflix',
    description: 'Acceso a la cuenta de Netflix',
    website: 'https://www.netflix.com/browse',
    username: 'family@doapps.me',
    password: 'DoAppsTeam2020',
  },
  {
    id: 2,
    name: 'Platzi',
    description: 'Acceso a la cuenta de Platzi',
    website: 'https://platzi.com/',
    username: 'doapps.me@gmail.com',
    password: 'DoAppsFinal2019',
  },
];

const instruction_gradle = [
  {
    id_instruction_gradle : 1,
    name : "Primaria"
  } ,

  {
    id_instruction_gradle : 2,
    name : "Secundaria"
  } ,
  {
    id_instruction_gradle : 3,
    name : "Técnico superior completa"
  } ,
  {
    id_instruction_gradle : 4,
    name : "Técnico superior incompleta"
  } ,
  {
    id_instruction_gradle : 5,
    name : "Superior completo"
  } ,
  {
    id_instruction_gradle : 6,
    name : "Superior incompleto"
  } ,
];

const employee = [
  {
    id: 1,
    name: 'Jonathan',
    lastname: 'Nolasco',
    email: 'jnolascob@gmail.com',
    password: '12345678',
  },
  {
    id: 2,
    name: 'Leo',
    lastname: 'Navarro',
    email: 'leo@gmail.com',
    password: '12345678',
  },
  {
    id: 3,
    name: 'Jose',
    lastname: 'Cabanillas',
    email: 'jose@gmail.com',
    password: '12345678',
  },
];

const attendance = [
  {
    register_date: '2019-04-17 09:58:06',
    check_in: '2019-04-17 09:58:06',
    check_out: '2019-04-17 09:58:06',
    employee_id: 1,
  },
];

// jose
const docs = [
  {
    name: 'Contrato',
    description: 'Documento de contrato de servicios',
    document_url: 'docs/contrato.pdf',
    author: 'company',
    upload_date: '2019-04-17 09:58:06',
    employee_id: 1,
  },
  {
    name: 'Ingreso a planilla',
    description: 'Documento de contrato de servicios',
    document_url: 'docs/contrato.pdf',
    author: 'company',
    upload_date: '2019-04-17 09:58:06',
    employee_id: 2,
  },
  {
    name: 'Contrato',
    description: 'Documento de contrato de servicios',
    document_url: 'docs/contrato.pdf',
    author: 'employee',
    upload_date: '2019-04-17 09:58:06',
    employee_id: 2,
  },
  {
    name: 'Certificado de trabajo',
    description: 'Documento de certificado de trabajo por el período 2019',
    document_url: 'docs/contrato.pdf',
    author: 'company',
    upload_date: '2019-04-17 09:58:06',
    employee_id: 3,
  },
];

const vacation_requests = [
  {
    start_date: '2019-04-17 09:58:06',
    end_date: '2019-04-24 09:58:06',
    description: 'Exijo mis vacaciones',
    employee_id: 1,
  },
];

const role_employee = [
  {
    employee_id: 1,
    role_id: 1,
  },
];

const roles = [
  {
    name: 'Diseñador',
  },
];

const tools = [
  {
    name: 'invision',
    description: 'credenciales de invisionapp',
    website: 'invisionapp.com',
    username: 'user',
    password: '123456',
    role_id: 1,
  },
];

const suggestions = [
  {
    message: 'Ubicar una cajita de cables',
  },
];

const trips = [
  {
    reason: 'Reunion',
    origin_address: 'DoApps',
    destination_address: 'Open Plaza Angamos',
    price: 5,
    date: '2019-04-24 09:58:06',
    employee_id: 1,
  },
];


function castAltitudes(altitudes){
  const d = altitudes.map((e) => ({
    min : e.A,
    max : e.B,
    factor : e.C,
  }));
  return d;
}

function castDistrict(districts) {
  const d = districts.map((e) => ({
      id_district : e.A,
      name : e.E,
      altitude : String(e.C),
      id_province : e.D,
    }));
  return d;
}

const provinces = [{ id: '010100', 'name': 'Chachapoyas', region_id: '010000', 'created_at': null, 'updated_at': null },
  { 'id': '010200', 'name': 'Bagua', region_id: '010000', created_at: null, 'updated_at': null }, { 'id': '010300', 'name': 'Bongar\u00e1', region_id: '010000', 'created_at': null, 'updated_at': null }, { 'id': '010400', name: 'Condorcanqui', 'region_id': '010000', created_at: null, 'updated_at': null }, { id: '010500', name: 'Luya', 'region_id': '010000', 'created_at': null, updated_at: null }, { 'id': '010600', 'name': 'Rodr\u00edguez de Mendoza', region_id: '010000', created_at: null, 'updated_at': null }, { id: '010700', 'name': 'Utcubamba', region_id: '010000', created_at: null, updated_at: null }, { 'id': '020100', name: 'Huaraz', 'region_id': '020000', created_at: null, updated_at: null }, { 'id': '020200', name: 'Aija', 'region_id': '020000', created_at: null, 'updated_at': null }, { id: '020300', 'name': 'Antonio Raymondi', region_id: '020000', 'created_at': null, 'updated_at': null }, { id: '020400', 'name': 'Asunci\u00f3n', region_id: '020000', created_at: null, 'updated_at': null }, { id: '020500', name: 'Bolognesi', region_id: '020000', 'created_at': null, 'updated_at': null }, { id: '020600', 'name': 'Carhuaz', 'region_id': '020000', created_at: null, updated_at: null }, { id: '020700', 'name': 'Carlos Ferm\u00edn Fitzcarrald', region_id: '020000', 'created_at': null, 'updated_at': null }, { id: '020800', name: 'Casma', 'region_id': '020000', created_at: null, 'updated_at': null }, { id: '020900', 'name': 'Corongo', 'region_id': '020000', 'created_at': null, 'updated_at': null }, { id: '021000', 'name': 'Huari', region_id: '020000', 'created_at': null, updated_at: null }, { id: '021100', 'name': 'Huarmey', 'region_id': '020000', created_at: null, updated_at: null }, { 'id': '021200', name: 'Huaylas', 'region_id': '020000', 'created_at': null, 'updated_at': null }, { 'id': '021300', name: 'Mariscal Luzuriaga', 'region_id': '020000', 'created_at': null, updated_at: null }, { id: '021400', name: 'Ocros', 'region_id': '020000', 'created_at': null, 'updated_at': null }, { id: '021500', name: 'Pallasca', region_id: '020000', created_at: null, 'updated_at': null }, { id: '021600', 'name': 'Pomabamba', region_id: '020000', 'created_at': null, updated_at: null }, { 'id': '021700', 'name': 'Recuay', 'region_id': '020000', created_at: null, 'updated_at': null }, { id: '021800', 'name': 'Santa', region_id: '020000', 'created_at': null, 'updated_at': null }, { id: '021900', name: 'Sihuas', 'region_id': '020000', created_at: null, 'updated_at': null }, { id: '022000', 'name': 'Yungay', region_id: '020000', 'created_at': null, updated_at: null }, { 'id': '030100', 'name': 'Abancay', region_id: '030000', 'created_at': null, 'updated_at': null }, { id: '030200', 'name': 'Andahuaylas', 'region_id': '030000', created_at: null, updated_at: null }, { 'id': '030300', 'name': 'Antabamba', 'region_id': '030000', 'created_at': null, 'updated_at': null }, { 'id': '030400', 'name': 'Aymaraes', 'region_id': '030000', 'created_at': null, 'updated_at': null }, { id: '030500', 'name': 'Cotabambas', region_id: '030000', created_at: null, 'updated_at': null }, { id: '030600', 'name': 'Chincheros', 'region_id': '030000', 'created_at': null, 'updated_at': null }, { id: '030700', 'name': 'Grau', region_id: '030000', created_at: null, updated_at: null }, { 'id': '040100', name: 'Arequipa', 'region_id': '040000', created_at: null, updated_at: null }, { id: '040200', name: 'Caman\u00e1', region_id: '040000', created_at: null, 'updated_at': null }, { 'id': '040300', name: 'Caravel\u00ed', 'region_id': '040000', created_at: null, updated_at: null }, { 'id': '040400', name: 'Castilla', region_id: '040000', 'created_at': null, updated_at: null }, { 'id': '040500', name: 'Caylloma', region_id: '040000', 'created_at': null, 'updated_at': null }, { 'id': '040600', name: 'Condesuyos', 'region_id': '040000', 'created_at': null, 'updated_at': null }, { id: '040700', 'name': 'Islay', 'region_id': '040000', 'created_at': null, updated_at: null }, { 'id': '040800', name: 'La Uni\u00f2n', region_id: '040000', 'created_at': null, 'updated_at': null }, { 'id': '050100', name: 'Huamanga', 'region_id': '050000', 'created_at': null, 'updated_at': null }, { id: '050200', name: 'Cangallo', 'region_id': '050000', created_at: null, 'updated_at': null }, { 'id': '050300', 'name': 'Huanca Sancos', region_id: '050000', created_at: null, 'updated_at': null }, { 'id': '050400', name: 'Huanta', 'region_id': '050000', created_at: null, 'updated_at': null }, { id: '050500', 'name': 'La Mar', 'region_id': '050000', created_at: null, updated_at: null }, { 'id': '050600', name: 'Lucanas', region_id: '050000', created_at: null, 'updated_at': null }, { 'id': '050700', 'name': 'Parinacochas', region_id: '050000', created_at: null, updated_at: null }, { id: '050800', name: 'P\u00e0ucar del Sara Sara', 'region_id': '050000', 'created_at': null, updated_at: null }, { id: '050900', name: 'Sucre', 'region_id': '050000', 'created_at': null, updated_at: null }, { 'id': '051000', name: 'V\u00edctor Fajardo', region_id: '050000', created_at: null, updated_at: null }, { 'id': '051100', 'name': 'Vilcas Huam\u00e1n', region_id: '050000', 'created_at': null, updated_at: null }, { 'id': '060100', name: 'Cajamarca', region_id: '060000', created_at: null, 'updated_at': null }, { 'id': '060200', name: 'Cajabamba', 'region_id': '060000', created_at: null, updated_at: null }, { 'id': '060300', name: 'Celend\u00edn', region_id: '060000', created_at: null, updated_at: null }, { id: '060400', name: 'Chota', region_id: '060000', created_at: null, 'updated_at': null }, { id: '060500', name: 'Contumaz\u00e1', region_id: '060000', created_at: null, updated_at: null }, { id: '060600', 'name': 'Cutervo', region_id: '060000', created_at: null, 'updated_at': null }, { 'id': '060700', name: 'Hualgayoc', 'region_id': '060000', 'created_at': null, 'updated_at': null }, { id: '060800', name: 'Ja\u00e9n', 'region_id': '060000', 'created_at': null, 'updated_at': null }, { 'id': '060900', name: 'San Ignacio', 'region_id': '060000', 'created_at': null, updated_at: null }, { 'id': '061000', 'name': 'San Marcos', region_id: '060000', created_at: null, updated_at: null }, { id: '061100', name: 'San Miguel', region_id: '060000', 'created_at': null, 'updated_at': null }, { 'id': '061200', 'name': 'San Pablo', 'region_id': '060000', created_at: null, 'updated_at': null }, { 'id': '061300', name: 'Santa Cruz', 'region_id': '060000', created_at: null, updated_at: null }, { id: '070100', name: 'Prov. Const. del Callao', 'region_id': '070000', 'created_at': null, updated_at: null }, { 'id': '080100', 'name': 'Cusco', region_id: '080000', 'created_at': null, 'updated_at': null }, { id: '080200', name: 'Acomayo', 'region_id': '080000', created_at: null, 'updated_at': null }, { id: '080300', 'name': 'Anta', 'region_id': '080000', 'created_at': null, 'updated_at': null }, { 'id': '080400', name: 'Calca', 'region_id': '080000', 'created_at': null, updated_at: null }, { id: '080500', name: 'Canas', 'region_id': '080000', created_at: null, updated_at: null }, { 'id': '080600', name: 'Canchis', region_id: '080000', created_at: null, updated_at: null }, { 'id': '080700', name: 'Chumbivilcas', region_id: '080000', created_at: null, 'updated_at': null }, { 'id': '080800', 'name': 'Espinar', 'region_id': '080000', created_at: null, updated_at: null }, { 'id': '080900', 'name': 'La Convenci\u00f3n', 'region_id': '080000', created_at: null, updated_at: null }, { id: '081000', 'name': 'Paruro', region_id: '080000', 'created_at': null, updated_at: null }, { id: '081100', name: 'Paucartambo', 'region_id': '080000', 'created_at': null, 'updated_at': null }, { 'id': '081200', name: 'Quispicanchi', region_id: '080000', created_at: null, updated_at: null }, { 'id': '081300', name: 'Urubamba', 'region_id': '080000', 'created_at': null, 'updated_at': null }, { 'id': '090100', name: 'Huancavelica', 'region_id': '090000', 'created_at': null, updated_at: null }, { id: '090200', name: 'Acobamba', 'region_id': '090000', created_at: null, 'updated_at': null }, { 'id': '090300', 'name': 'Angaraes', region_id: '090000', created_at: null, 'updated_at': null }, { id: '090400', name: 'Castrovirreyna', region_id: '090000', 'created_at': null, 'updated_at': null }, { id: '090500', name: 'Churcampa', region_id: '090000', 'created_at': null, 'updated_at': null }, { 'id': '090600', 'name': 'Huaytar\u00e1', region_id: '090000', created_at: null, 'updated_at': null }, { id: '090700', name: 'Tayacaja', region_id: '090000', created_at: null, 'updated_at': null }, { 'id': '100100', name: 'Hu\u00e1nuco', region_id: '100000', 'created_at': null, 'updated_at': null }, { 'id': '100200', name: 'Ambo', 'region_id': '100000', created_at: null, updated_at: null }, { 'id': '100300', name: 'Dos de Mayo', region_id: '100000', created_at: null, 'updated_at': null }, { 'id': '100400', name: 'Huacaybamba', region_id: '100000', created_at: null, 'updated_at': null }, { id: '100500', name: 'Huamal\u00edes', 'region_id': '100000', 'created_at': null, 'updated_at': null }, { id: '100600', name: 'Leoncio Prado', region_id: '100000', created_at: null, updated_at: null }, { 'id': '100700', 'name': 'Mara\u00f1\u00f3n', 'region_id': '100000', created_at: null, updated_at: null }, { 'id': '100800', name: 'Pachitea', region_id: '100000', created_at: null, 'updated_at': null }, { 'id': '100900', 'name': 'Puerto Inca', 'region_id': '100000', 'created_at': null, updated_at: null }, { 'id': '101000', 'name': 'Lauricocha ', region_id: '100000', 'created_at': null, 'updated_at': null }, { id: '101100', name: 'Yarowilca ', 'region_id': '100000', 'created_at': null, updated_at: null }, { id: '110100', 'name': 'Ica ', 'region_id': '110000', 'created_at': null, updated_at: null }, { 'id': '110200', 'name': 'Chincha ', 'region_id': '110000', created_at: null, 'updated_at': null }, { id: '110300', 'name': 'Nasca ', 'region_id': '110000', 'created_at': null, updated_at: null }, { id: '110400', name: 'Palpa ', region_id: '110000', created_at: null, 'updated_at': null }, { id: '110500', name: 'Pisco ', 'region_id': '110000', 'created_at': null, updated_at: null }, { id: '120100', name: 'Huancayo ', region_id: '120000', 'created_at': null, 'updated_at': null }, { id: '120200', name: 'Concepci\u00f3n ', region_id: '120000', created_at: null, 'updated_at': null }, { id: '120300', name: 'Chanchamayo ', region_id: '120000', created_at: null, 'updated_at': null }, { id: '120400', 'name': 'Jauja ', region_id: '120000', created_at: null, 'updated_at': null }, { 'id': '120500', name: 'Jun\u00edn ', region_id: '120000', created_at: null, 'updated_at': null }, { 'id': '120600', name: 'Satipo ', 'region_id': '120000', 'created_at': null, updated_at: null }, { 'id': '120700', 'name': 'Tarma ', region_id: '120000', created_at: null, 'updated_at': null }, { 'id': '120800', name: 'Yauli ', region_id: '120000', 'created_at': null, 'updated_at': null }, { id: '120900', name: 'Chupaca ', 'region_id': '120000', 'created_at': null, updated_at: null }, { 'id': '130100', 'name': 'Trujillo ', region_id: '130000', 'created_at': null, updated_at: null }, { 'id': '130200', 'name': 'Ascope ', region_id: '130000', 'created_at': null, 'updated_at': null }, { 'id': '130300', 'name': 'Bol\u00edvar ', region_id: '130000', 'created_at': null, updated_at: null }, { 'id': '130400', 'name': 'Chep\u00e9n ', 'region_id': '130000', created_at: null, 'updated_at': null }, { id: '130500', 'name': 'Julc\u00e1n ', 'region_id': '130000', created_at: null, 'updated_at': null }, { 'id': '130600', 'name': 'Otuzco ', 'region_id': '130000', 'created_at': null, updated_at: null }, { 'id': '130700', 'name': 'Pacasmayo ', 'region_id': '130000', created_at: null, updated_at: null }, { 'id': '130800', name: 'Pataz ', region_id: '130000', created_at: null, 'updated_at': null }, { id: '130900', 'name': 'S\u00e1nchez Carri\u00f3n ', region_id: '130000', created_at: null, 'updated_at': null }, { id: '131000', name: 'Santiago de Chuco ', region_id: '130000', 'created_at': null, updated_at: null }, { id: '131100', 'name': 'Gran Chim\u00fa ', region_id: '130000', 'created_at': null, updated_at: null }, { 'id': '131200', 'name': 'Vir\u00fa ', 'region_id': '130000', 'created_at': null, updated_at: null }, { id: '140100', 'name': 'Chiclayo ', region_id: '140000', 'created_at': null, 'updated_at': null }, { 'id': '140200', 'name': 'Ferre\u00f1afe ', region_id: '140000', 'created_at': null, 'updated_at': null }, { id: '140300', name: 'Lambayeque ', 'region_id': '140000', 'created_at': null, 'updated_at': null }, { id: '150100', 'name': 'Lima ', 'region_id': '150000', 'created_at': null, updated_at: null }, { id: '150200', name: 'Barranca ', region_id: '150000', 'created_at': null, updated_at: null }, { 'id': '150300', name: 'Cajatambo ', region_id: '150000', 'created_at': null, 'updated_at': null }, { 'id': '150400', name: 'Canta ', 'region_id': '150000', created_at: null, updated_at: null }, { id: '150500', 'name': 'Ca\u00f1ete ', 'region_id': '150000', 'created_at': null, 'updated_at': null }, { 'id': '150600', 'name': 'Huaral ', region_id: '150000', 'created_at': null, 'updated_at': null }, { 'id': '150700', name: 'Huarochir\u00ed ', region_id: '150000', 'created_at': null, updated_at: null }, { 'id': '150800', 'name': 'Huaura ', region_id: '150000', 'created_at': null, 'updated_at': null }, { 'id': '150900', name: 'Oy\u00f3n ', region_id: '150000', 'created_at': null, updated_at: null }, { 'id': '151000', 'name': 'Yauyos ', 'region_id': '150000', 'created_at': null, updated_at: null }, { 'id': '160100', name: 'Maynas ', region_id: '160000', 'created_at': null, updated_at: null }, { id: '160200', 'name': 'Alto Amazonas ', 'region_id': '160000', 'created_at': null, updated_at: null }, { id: '160300', 'name': 'Loreto ', region_id: '160000', created_at: null, updated_at: null }, { 'id': '160400', name: 'Mariscal Ram\u00f3n Castilla ', 'region_id': '160000', created_at: null, 'updated_at': null }, { id: '160500', name: 'Requena ', 'region_id': '160000', 'created_at': null, updated_at: null }, { 'id': '160600', 'name': 'Ucayali ', region_id: '160000', created_at: null, updated_at: null }, { 'id': '160700', name: 'Datem del Mara\u00f1\u00f3n ', 'region_id': '160000', 'created_at': null, updated_at: null }, { id: '160800', name: 'Putumayo', region_id: '160000', created_at: null, 'updated_at': null }, { id: '170100', name: 'Tambopata ', 'region_id': '170000', created_at: null, updated_at: null }, { 'id': '170200', 'name': 'Manu ', 'region_id': '170000', created_at: null, updated_at: null }, { id: '170300', 'name': 'Tahuamanu ', 'region_id': '170000', 'created_at': null, 'updated_at': null }, { id: '180100', name: 'Mariscal Nieto ', 'region_id': '180000', created_at: null, updated_at: null }, { id: '180200', 'name': 'General S\u00e1nchez Cerro ', 'region_id': '180000', created_at: null, updated_at: null }, { 'id': '180300', 'name': 'Ilo ', region_id: '180000', created_at: null, updated_at: null }, { 'id': '190100', name: 'Pasco ', region_id: '190000', created_at: null, updated_at: null }, { 'id': '190200', 'name': 'Daniel Alcides Carri\u00f3n ', region_id: '190000', created_at: null, 'updated_at': null }, { 'id': '190300', 'name': 'Oxapampa ', 'region_id': '190000', created_at: null, 'updated_at': null }, { id: '200100', name: 'Piura ', region_id: '200000', created_at: null, updated_at: null }, { id: '200200', 'name': 'Ayabaca ', region_id: '200000', 'created_at': null, 'updated_at': null }, { id: '200300', 'name': 'Huancabamba ', region_id: '200000', 'created_at': null, 'updated_at': null }, { 'id': '200400', 'name': 'Morrop\u00f3n ', region_id: '200000', 'created_at': null, 'updated_at': null }, { 'id': '200500', 'name': 'Paita ', 'region_id': '200000', 'created_at': null, updated_at: null }, { 'id': '200600', 'name': 'Sullana ', region_id: '200000', 'created_at': null, updated_at: null }, { 'id': '200700', 'name': 'Talara ', region_id: '200000', 'created_at': null, updated_at: null }, { id: '200800', 'name': 'Sechura ', 'region_id': '200000', 'created_at': null, 'updated_at': null }, { 'id': '210100', name: 'Puno ', 'region_id': '210000', 'created_at': null, 'updated_at': null }, { 'id': '210200', 'name': 'Az\u00e1ngaro ', region_id: '210000', 'created_at': null, updated_at: null }, { 'id': '210300', 'name': 'Carabaya ', 'region_id': '210000', 'created_at': null, updated_at: null }, { 'id': '210400', name: 'Chucuito ', region_id: '210000', 'created_at': null, 'updated_at': null }, { 'id': '210500', 'name': 'El Collao ', region_id: '210000', 'created_at': null, updated_at: null }, { id: '210600', 'name': 'Huancan\u00e9 ', region_id: '210000', created_at: null, 'updated_at': null }, { id: '210700', 'name': 'Lampa ', 'region_id': '210000', 'created_at': null, updated_at: null }, { id: '210800', 'name': 'Melgar ', region_id: '210000', created_at: null, 'updated_at': null }, { 'id': '210900', name: 'Moho ', 'region_id': '210000', created_at: null, 'updated_at': null }, { id: '211000', 'name': 'San Antonio de Putina ', region_id: '210000', 'created_at': null, updated_at: null }, { 'id': '211100', 'name': 'San Rom\u00e1n ', 'region_id': '210000', 'created_at': null, updated_at: null }, { 'id': '211200', 'name': 'Sandia ', region_id: '210000', created_at: null, 'updated_at': null }, { id: '211300', 'name': 'Yunguyo ', 'region_id': '210000', created_at: null, 'updated_at': null }, { 'id': '220100', 'name': 'Moyobamba ', region_id: '220000', 'created_at': null, 'updated_at': null }, { 'id': '220200', name: 'Bellavista ', region_id: '220000', 'created_at': null, 'updated_at': null }, { id: '220300', 'name': 'El Dorado ', region_id: '220000', 'created_at': null, 'updated_at': null }, { 'id': '220400', name: 'Huallaga ', region_id: '220000', created_at: null, 'updated_at': null }, { id: '220500', 'name': 'Lamas ', region_id: '220000', created_at: null, 'updated_at': null }, { 'id': '220600', 'name': 'Mariscal C\u00e1ceres ', 'region_id': '220000', created_at: null, updated_at: null }, { id: '220700', name: 'Picota ', region_id: '220000', created_at: null, updated_at: null }, { 'id': '220800', 'name': 'Rioja ', region_id: '220000', 'created_at': null, updated_at: null }, { id: '220900', name: 'San Mart\u00edn ', region_id: '220000', created_at: null, updated_at: null }, { id: '221000', name: 'Tocache ', region_id: '220000', 'created_at': null, 'updated_at': null }, { id: '230100', 'name': 'Tacna ', 'region_id': '230000', 'created_at': null, updated_at: null }, { id: '230200', 'name': 'Candarave ', 'region_id': '230000', created_at: null, 'updated_at': null }, { id: '230300', 'name': 'Jorge Basadre ', region_id: '230000', created_at: null, 'updated_at': null }, { id: '230400', name: 'Tarata ', region_id: '230000', 'created_at': null, 'updated_at': null }, { 'id': '240100', name: 'Tumbes ', region_id: '240000', created_at: null, 'updated_at': null }, { 'id': '240200', 'name': 'Contralmirante Villar ', 'region_id': '240000', created_at: null, updated_at: null }, { id: '240300', 'name': 'Zarumilla ', 'region_id': '240000', created_at: null, updated_at: null }, { id: '250100', 'name': 'Coronel Portillo ', 'region_id': '250000', 'created_at': null, updated_at: null }, { 'id': '250200', name: 'Atalaya ', region_id: '250000', 'created_at': null, 'updated_at': null }, { 'id': '250300', 'name': 'Padre Abad ', region_id: '250000', 'created_at': null, updated_at: null }, { 'id': '250400', name: 'Pur\u00fas', 'region_id': '250000', created_at: null, updated_at: null }];

function castProvinces(provinces) {
  const p = provinces.map((e) => ({
      id_province : e.id,
      name : e.name,
      id_department : e.region_id
    }));
  return p;
}

const departments =   [{ 'id': '010000', name: 'Amazonas', 'created_at': null, 'updated_at': null },
    { 'id': '020000', name: '\u00c1ncash', 'created_at': null, updated_at: null },
    { 'id': '030000', name: 'Apur\u00edmac', created_at: null, updated_at: null },
    { 'id': '040000', name: 'Arequipa', created_at: null, 'updated_at': null },
    { id: '050000', name: 'Ayacucho', created_at: null, updated_at: null },
    { 'id': '060000', 'name': 'Cajamarca', 'created_at': null, 'updated_at': null },
    { id: '070000', name: 'Callao', 'created_at': null, 'updated_at': null },
    { id: '080000', name: 'Cusco', 'created_at': null, updated_at: null },
    { 'id': '090000', name: 'Huancavelica', created_at: null, updated_at: null },
    { id: '100000', name: 'Hu\u00e1nuco', created_at: null, 'updated_at': null },
    { id: '110000', 'name': 'Ica', 'created_at': null, updated_at: null },
    { id: '120000', 'name': 'Jun\u00edn', created_at: null, 'updated_at': null },
    { id: '130000', name: 'La Libertad', 'created_at': null, updated_at: null },
    { id: '140000', name: 'Lambayeque', created_at: null, 'updated_at': null },
    { id: '150000', 'name': 'Lima', 'created_at': null, updated_at: null },
    { 'id': '160000', name: 'Loreto', created_at: null, 'updated_at': null },
    { 'id': '170000', name: 'Madre de Dios', created_at: null, 'updated_at': null },
    { id: '180000', name: 'Moquegua', created_at: null, 'updated_at': null },
    { 'id': '190000', 'name': 'Pasco', created_at: null, updated_at: null },
    { id: '200000', name: 'Piura', created_at: null, 'updated_at': null },
    { id: '210000', name: 'Puno', 'created_at': null, 'updated_at': null },
    { id: '220000', name: 'San Mart\u00edn', created_at: null, 'updated_at': null },
    { id: '230000', 'name': 'Tacna', created_at: null, updated_at: null },
    { 'id': '240000', name: 'Tumbes', created_at: null, updated_at: null },
    { id: '250000', name: 'Ucayali', 'created_at': null, updated_at: null }];
function castDepartmens(departments) {
  const d = departments.map((e) => ({
      id_department : e.id,
      name : e.name,
    }));
  return d;
}

const establishment_type = [
  {
    id_establishment_type: 1,
    name: 'Essalud'
  },
  {
    id_establishment_type: 2,
    name: 'Gobierno Regional'
  },
  {
    id_establishment_type: 3,
    name: 'Inpe'
  },
  {
    id_establishment_type: 4,
    name: 'Minsa'
  },
  {
    id_establishment_type: 5,
    name: 'Privado'
  },
  {
    id_establishment_type: 6,
    name: 'Municipalidad Distrital'
  },
  {
    id_establishment_type: 7,
    name: 'Municipalidad Provincial'
  },
  {
    id_establishment_type: 8,
    name: 'Otro'
  },
  {
    id_establishment_type: 9,
    name: 'Sanidad De La Fuerza Aerea Del Peru'
  },
  {
    id_establishment_type: 10,
    name: 'Sanidad De La Marina De Guerra Del Peru'
  },
  {
    id_establishment_type: 11,
    name: 'Sanidad De La Policia Nacional Del Peru'
  },
  {
    id_establishment_type: 12,
    name: 'Sanidad Del Ejercito Del Peru'
  },
]

const types_recomendation = [
  {
    name: 'Carnes'
  },
  {
    name: 'Legumbres'
  },
  {
    name: 'Frutos secos'
  },
  {
    name: 'Frutas'
  },
  {
    name: 'Otros'
  }
];

const recomendation = [
  {
    description: 'Deberias de saludar antes de hablar con alguien',
    id_type_recomendation: 1,
  },
  {
    description: 'Deberias de arrojar la basura en los tachos',
    id_type_recomendation: 2,
  },
  {
    description: 'Deberias de agradecer a Jesus antes de comer',
    id_type_recomendation: 3,
  },
  {
    description: 'Tienes que comer saludable',
    id_type_recomendation: 4,
  },
]

const admin = [
  {
    email: 'admin@gmail.com',
    password: 'admin'
  }
]

const roles =[
  {
    nombre: 'Administrador'
  },
  {
    empleado: 'Empleado'
  }
];

const usuarios = [
  {
    nombres: 'Jose Luis',
    apellidos: 'Duran Zarate',
    genero: 'Masculino',
    correo: 'jose.com',
    documentoIdentidad: '75089125',
    contrasena: '123456',
    idRol: 1,
    estado: 1
  }
];

exports.seed = async (knex) => {
  await knex.raw('SET @@SESSION.foreign_key_checks = 0;');
  await knex('rol').del();
  await knex('usuario').del();
  await knex.raw('SET @@SESSION.foreign_key_checks = 1;');
  await knex('rol').insert(roles);
  await knex('usuario').insert(usuarios);
};
