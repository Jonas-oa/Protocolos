// --- GERAÇÃO DINÂMICA DO BANCO DE DADOS COMPACTADO ---
const bancoDeDados = { 
    "GENÉRICOS": [],
    "MARIO PENNA": [
        { exame: "FACE E PESCOCO", suspeita: "TUMOR", decisao: "CONTRASTE INDICADO", comentarios: "Fase Venosa. Manobras de fonação." },
        { exame: "FACE E PESCOCO", suspeita: "PARAGANGLIOMA", decisao: "CONTRASTE INDICADO", comentarios: "Fase arterial e venosa." }
    ]
};

const regras_compactas = [
{ exames: ["TC CRÂNIO", "TC ENCÉFALO", "TC ÓRBITAS", "TC SEIOS DA FACE", "TC OSSOS TEMPORAIS"], suspeitas: ["AVC", "TCE", "TRAUMA"], decisao: "CONTRASTE NÃO INDICADO", comentarios: "Subespecialidade: Neurorradiologia" },
{ exames: ["TC CRÂNIO", "TC ENCÉFALO", "TC ÓRBITAS", "TC SEIOS DA FACE", "TC OSSOS TEMPORAIS"], suspeitas: ["ANEURISMA", "DOR ABDOMINAL", "ESTADIAMENTO", "INFECÇÃO", "NEOPLASIA", "PLANEJAMENTO CIRÚRGICO", "SEGUIMENTO ONCOLÓGICO"], decisao: "CONTRASTE INDICADO", comentarios: "Subespecialidade: Neurorradiologia" },
{ exames: ["TC PESCOÇO"], suspeitas: ["AVC", "TCE"], decisao: "CONTRASTE NÃO INDICADO", comentarios: "Subespecialidade: Neurorradiologia" },
{ exames: ["TC PESCOÇO"], suspeitas: ["ANEURISMA", "DOR ABDOMINAL", "ESTADIAMENTO", "INFECÇÃO", "NEOPLASIA", "PLANEJAMENTO CIRÚRGICO", "SEGUIMENTO ONCOLÓGICO", "TRAUMA"], decisao: "CONTRASTE INDICADO", comentarios: "Subespecialidade: Neurorradiologia" },
{ exames: ["TC TÓRAX", "TC PULMÕES", "TC MEDIASTINO"], suspeitas: ["ANEURISMA", "ESTADIAMENTO", "INFECÇÃO", "NEOPLASIA", "PLANEJAMENTO CIRÚRGICO", "SEGUIMENTO ONCOLÓGICO", "TRAUMA"], decisao: "CONTRASTE INDICADO", comentarios: "Subespecialidade: Tórax" },
{ exames: ["TC AORTA", "TC CARÓTIDAS"], suspeitas: ["ANEURISMA", "ESTADIAMENTO", "INFECÇÃO", "NEOPLASIA", "PLANEJAMENTO CIRÚRGICO", "SEGUIMENTO ONCOLÓGICO", "TRAUMA"], decisao: "CONTRASTE INDICADO", comentarios: "Subespecialidade: Cardiovascular" },
{ exames: ["TC ARTÉRIAS PULMONARES"], suspeitas: ["ANEURISMA", "ESTADIAMENTO", "INFECÇÃO", "NEOPLASIA", "PLANEJAMENTO CIRÚRGICO", "SEGUIMENTO ONCOLÓGICO", "TRAUMA"], decisao: "CONTRASTE INDICADO", comentarios: "Subespecialidade: Cardiovascular" },
{ exames: ["TC FÍGADO", "TC PÂNCREAS", "TC BAÇO", "TC RINS", "TC ADRENAIS", "TC ABDOME", "TC PELVE", "TC PRÓSTATA", "TC BEXIGA"], suspeitas: ["ANEURISMA", "DOR ABDOMINAL", "ESTADIAMENTO", "INFECÇÃO", "NEOPLASIA", "PLANEJAMENTO CIRÚRGICO", "SEGUIMENTO ONCOLÓGICO", "TRAUMA"], decisao: "CONTRASTE INDICADO", comentarios: "Subespecialidade: Abdome" },
{ exames: ["TC FÍGADO", "TC PÂNCREAS", "TC BAÇO", "TC RINS", "TC ADRENAIS", "TC ABDOME", "TC PELVE", "TC PRÓSTATA", "TC BEXIGA"], suspeitas: ["LITÍASE"], decisao: "CONTRASTE NÃO INDICADO", comentarios: "Subespecialidade: Abdome" },
{ exames: ["TC OMBRO", "TC COTOVELO", "TC PUNHO", "TC MÃO", "TC QUADRIL", "TC JOELHO", "TC TORNOZELO", "TC PÉ", "TC COLUNA CERVICAL", "TC COLUNA TORÁCICA", "TC COLUNA LOMBAR"], suspeitas: ["ANEURISMA", "ESTADIAMENTO", "INFECÇÃO", "NEOPLASIA", "PLANEJAMENTO CIRÚRGICO", "SEGUIMENTO ONCOLÓGICO"], decisao: "CONTRASTE INDICADO", comentarios: "Subespecialidade: Musculoesquelético" },
{ exames: ["TC OMBRO", "TC COTOVELO", "TC PUNHO", "TC MÃO", "TC QUADRIL", "TC JOELHO", "TC TORNOZELO", "TC PÉ", "TC COLUNA CERVICAL", "TC COLUNA TORÁCICA", "TC COLUNA LOMBAR"], suspeitas: ["TRAUMA"], decisao: "CONTRASTE NÃO INDICADO", comentarios: "Subespecialidade: Musculoesquelético" },
{ exames: ["TC CRÂNIO PEDIÁTRICO"], suspeitas: ["TCE"], decisao: "CONTRASTE NÃO INDICADO", comentarios: "Subespecialidade: Pediatria" },
{ exames: ["TC CRÂNIO PEDIÁTRICO"], suspeitas: ["DOR ABDOMINAL", "INFECÇÃO", "NEOPLASIA", "TRAUMA"], decisao: "CONTRASTE INDICADO", comentarios: "Subespecialidade: Pediatria" },
{ exames: ["TC TÓRAX PEDIÁTRICO"], suspeitas: ["INFECÇÃO", "NEOPLASIA", "TRAUMA"], decisao: "CONTRASTE INDICADO", comentarios: "Subespecialidade: Pediatria" },
{ exames: ["TC ABDOME PEDIÁTRICO"], suspeitas: ["DOR ABDOMINAL", "INFECÇÃO", "NEOPLASIA", "TRAUMA"], decisao: "CONTRASTE INDICADO", comentarios: "Subespecialidade: Pediatria" },
{ exames: ["TC MANDÍBULA", "TC MAXILA", "TC ATM"], suspeitas: ["TRAUMA"], decisao: "CONTRASTE NÃO INDICADO", comentarios: "Subespecialidade: Odontologia" },
{ exames: ["TC MANDÍBULA", "TC MAXILA", "TC ATM"], suspeitas: ["INFECÇÃO", "NEOPLASIA", "PLANEJAMENTO CIRÚRGICO"], decisao: "CONTRASTE INDICADO", comentarios: "Subespecialidade: Odontologia" },
{ exames: ["TC BIÓPSIA", "TC DRENAGEM"], suspeitas: ["DOR ABDOMINAL", "INFECÇÃO", "NEOPLASIA", "PLANEJAMENTO CIRÚRGICO", "TRAUMA"], decisao: "CONTRASTE INDICADO", comentarios: "Subespecialidade: Intervenção" },
{ exames: ["ANGIOTC CEREBRAL", "TC PERFUSÃO CEREBRAL"], suspeitas: ["ANEURISMA", "AVC", "AVC AGUDO", "DOR ABDOMINAL", "ESTADIAMENTO", "INFECÇÃO", "NEOPLASIA", "PLANEJAMENTO CIRÚRGICO", "SEGUIMENTO ONCOLÓGICO", "TRAUMA"], decisao: "CONTRASTE INDICADO", comentarios: "Subespecialidade: Neurorradiologia" },
{ exames: ["ANGIOTC CEREBRAL", "TC PERFUSÃO CEREBRAL"], suspeitas: ["TCE"], decisao: "CONTRASTE NÃO INDICADO", comentarios: "Subespecialidade: Neurorradiologia" },
{ exames: ["ANGIOTC CARÓTIDAS"], suspeitas: ["ANEURISMA", "ESTADIAMENTO", "ESTENOSE CAROTÍDEA", "INFECÇÃO", "NEOPLASIA", "PLANEJAMENTO CIRÚRGICO", "SEGUIMENTO ONCOLÓGICO", "TRAUMA"], decisao: "CONTRASTE INDICADO", comentarios: "Subespecialidade: Cardiovascular" },
{ exames: ["ANGIOTC TEP"], suspeitas: ["ANEURISMA", "ESTADIAMENTO", "INFECÇÃO", "NEOPLASIA", "PLANEJAMENTO CIRÚRGICO", "SEGUIMENTO ONCOLÓGICO", "TRAUMA", "TROMBOEMBOLISMO PULMONAR"], decisao: "CONTRASTE INDICADO", comentarios: "Subespecialidade: Cardiovascular" },
{ exames: ["ANGIOTC CORONÁRIAS"], suspeitas: ["ANEURISMA", "DOENÇA CORONARIANA", "ESTADIAMENTO", "INFECÇÃO", "NEOPLASIA", "PLANEJAMENTO CIRÚRGICO", "SEGUIMENTO ONCOLÓGICO", "TRAUMA"], decisao: "CONTRASTE INDICADO", comentarios: "Subespecialidade: Cardiovascular" },
{ exames: ["TC ESCORE DE CÁLCIO"], suspeitas: ["ESTRATIFICAÇÃO DE RISCO"], decisao: "CONTRASTE NÃO INDICADO", comentarios: "Subespecialidade: Cardiovascular" },
{ exames: ["TC ESCORE DE CÁLCIO"], suspeitas: ["ANEURISMA", "ESTADIAMENTO", "INFECÇÃO", "NEOPLASIA", "PLANEJAMENTO CIRÚRGICO", "SEGUIMENTO ONCOLÓGICO", "TRAUMA"], decisao: "CONTRASTE INDICADO", comentarios: "Subespecialidade: Cardiovascular" },
{ exames: ["UROTC"], suspeitas: ["ANEURISMA", "DOR ABDOMINAL", "ESTADIAMENTO", "HEMATÚRIA", "INFECÇÃO", "NEOPLASIA", "PLANEJAMENTO CIRÚRGICO", "SEGUIMENTO ONCOLÓGICO", "TRAUMA"], decisao: "CONTRASTE INDICADO", comentarios: "Subespecialidade: Abdome" },
{ exames: ["UROTC"], suspeitas: ["LITÍASE"], decisao: "CONTRASTE NÃO INDICADO", comentarios: "Subespecialidade: Abdome" },
{ exames: ["TC FÍGADO TRIFÁSICO", "TC ENTEROGRAFIA"], suspeitas: ["ANEURISMA", "DOR ABDOMINAL", "DOENÇA DE CROHN", "ESTADIAMENTO", "HEPATOCARCINOMA", "INFECÇÃO", "NEOPLASIA", "PLANEJAMENTO CIRÚRGICO", "SEGUIMENTO ONCOLÓGICO", "TRAUMA"], decisao: "CONTRASTE INDICADO", comentarios: "Subespecialidade: Abdome" },
{ exames: ["TC FÍGADO TRIFÁSICO", "TC ENTEROGRAFIA"], suspeitas: ["LITÍASE"], decisao: "CONTRASTE NÃO INDICADO", comentarios: "Subespecialidade: Abdome" },
{ exames: ["TC COLONOGRAFIA"], suspeitas: ["RASTREAMENTO"], decisao: "CONTRASTE NÃO INDICADO", comentarios: "Subespecialidade: Abdome" },
{ exames: ["TC COLONOGRAFIA"], suspeitas: ["ANEURISMA", "DOR ABDOMINAL", "ESTADIAMENTO", "INFECÇÃO", "NEOPLASIA", "PLANEJAMENTO CIRÚRGICO", "SEGUIMENTO ONCOLÓGICO", "TRAUMA"], decisao: "CONTRASTE INDICADO", comentarios: "Subespecialidade: Abdome" }
];

regras_compactas.forEach(r => {
    r.exames.forEach(exame => {
        r.suspeitas.forEach(suspeita => {
            bancoDeDados["GENÉRICOS"].push({
                exame: exame, suspeita: suspeita, decisao: r.decisao, comentarios: r.comentarios
            });
        });
    });
});
// --- FIM DA GERAÇÃO ---
