const bancoDeDados = {
    "Abdome": [
        {
            "exame": "TC DE ABDOME SUPERIOR",
            "suspeita": "AVALIAÇÃO DE NÓDULO HEPÁTICO OU CIRROSE",
            "decisao": "CONTRASTE INDICADO",
            "comentarios": "Protocolo hepático trifásico ou tetrafásico (fases arterial, portal e de equilíbrio)."
        },
        {
            "exame": "TC DE ABDOME SUPERIOR",
            "suspeita": "PANCREATITE AGUDA OU COMPLICAÇÕES",
            "decisao": "CONTRASTE INDICADO",
            "comentarios": "Ideal após 48-72h do início do quadro clínico para avaliar graus de necrose."
        },
        {
            "exame": "TC DE ABDOME SUPERIOR",
            "suspeita": "SUSPEITA DE NEOPLASIA PANCREÁTICA",
            "decisao": "CONTRASTE INDICADO",
            "comentarios": "Requer fase parenquimatosa pancreática (arterial tardia, aprox. 40s) e fase portal."
        },
        {
            "exame": "TC DE ABDOME SUPERIOR",
            "suspeita": "MASSA OU NÓDULO ADRENAL (INCIDENTALOMA)",
            "decisao": "CONTRASTE INDICADO",
            "comentarios": "Protocolo para cálculo de washout (fase sem contraste, venosa e tardia de 10 a 15 minutos)."
        },
        {
            "exame": "TC DE ABDOME SUPERIOR",
            "suspeita": "TRAUMA ABDOMINAL (FÍGADO, BAÇO OU RINS)",
            "decisao": "CONTRASTE INDICADO",
            "comentarios": "Pesquisa de lacerações parenquimatosas e sangramento ativo (fase portal e excretora)."
        },
        {
            "exame": "TC DE ABDOME SUPERIOR",
            "suspeita": "DOR ABDOMINAL AGUDA (QUADRO BILIAR)",
            "decisao": "CONTRASTE INDICADO",
            "comentarios": "Suspeita de colecistite aguda ou colangite complidada (USG costuma ser o exame inicial)."
        },
        {
            "exame": "TC DE ABDOME",
            "suspeita": "CÓLICA NEFRÉTICA OU LITÍASE RENAL",
            "decisao": "CONTRASTE NÃO INDICADO",
            "comentarios": "Protocolo para pesquisa de cálculos renais ou ureterais (geralmente estendido até a pelve)."
        },
        {
            "exame": "TC DE ABDOME SUPERIOR",
            "suspeita": "ESTADIAMENTO ONCOLÓGICO",
            "decisao": "CONTRASTE INDICADO",
            "comentarios": "Pesquisa de metástases hepáticas, linfonodomegalias e ascite."
        },
        {
            "exame": "TC DE ABDOME SUPERIOR",
            "suspeita": "ABSCESSO HEPÁTICO OU ESPLÊNICO",
            "decisao": "CONTRASTE INDICADO",
            "comentarios": "Avaliação de coleções infecciosas intra-abdominais."
        },
        {
            "exame": "ANGIO-TC DE ABDOME",
            "suspeita": "SUSPEITA DE ANEURISMA DE AORTA ABDOMINAL",
            "decisao": "CONTRASTE INDICADO",
            "comentarios": "Fase arterial pura para avaliação do calibre vascular, presença de trombos e dissecção."
        },
        {
            "exame": "TC DE ABDOME",
            "suspeita": "NEOPLASIA",
            "decisao": "CONTRASTE INDICADO",
            "comentarios": "Regra abrangente para capturar entradas genéricas de abdômen com suspeita de tumor/CA."
        },
        {
            "exame": "TC DE ABDOME SUPERIOR",
            "suspeita": "NEOPLASIA",
            "decisao": "CONTRASTE INDICADO",
            "comentarios": "Regra direta para abdome superior com suspeita de CA."
        }
    ],
    "Sistema Completo": [
        {
            "exame": "ANGIO-TC DE AORTA TÓRACO-ABDOMINAL",
            "suspeita": "ANEURISMA DE AORTA (PLANEJAMENTO EVAR/TEVAR)",
            "decisao": "CONTRASTE INDICADO",
            "comentarios": "Mapeamento completo da aorta para medição de colos, angulações e planejamento de endoprótese."
        },
        {
            "exame": "ANGIO-TC DE AORTA TÓRACO-ABDOMINAL",
            "suspeita": "DISSECÇÃO AÓRTICA (TIPO A OU B)",
            "decisao": "CONTRASTE INDICADO",
            "comentarios": "Extensão da falha intimal, avaliação da luz verdadeira/falsa e pesquisa de isquemia de órgãos abdominais."
        },
        {
            "exame": "ANGIO-TC DE VASOS CERVICAIS",
            "suspeita": "ESTENOSE CAROTÍDEA OU ATEROMATOSE",
            "decisao": "CONTRASTE INDICADO",
            "comentarios": "Quantificação do grau de estenose nas bifurcações carotídeas e pesquisa de placas ulceradas."
        },
        {
            "exame": "ANGIO-TC DE VASOS CERVICAIS",
            "suspeita": "DISSECÇÃO ARTERIAL CERVICAL",
            "decisao": "CONTRASTE INDICADO",
            "comentarios": "Indicado em casos de trauma cervical contuso ou cefaleia/cervicalgia aguda com sinais neurológicos."
        },
        {
            "exame": "ANGIO-TC DE ARTÉRIAS RENAIS",
            "suspeita": "HIPERTENSÃO RENOVASCULAR",
            "decisao": "CONTRASTE INDICADO",
            "comentarios": "Pesquisa de estenose de artéria renal, displasia fibromuscular ou avaliação pré-transplante."
        },
        {
            "exame": "ANGIO-TC DE ARTÉRIAS MESENTÉRICAS",
            "suspeita": "ISQUEMIA MESENTÉRICA AGUDA",
            "decisao": "CONTRASTE INDICADO",
            "comentarios": "Foco na avaliação de trombose ou embolia no tronco celíaco e artérias mesentéricas superior/inferior."
        },
        {
            "exame": "ANGIO-TC CORONARIANA",
            "suspeita": "DOENÇA ARTERIAL CORONARIANA (DAC)",
            "decisao": "CONTRASTE INDICADO",
            "comentarios": "Requer sincronização por ECG (gating) e controle rigoroso da frequência cardíaca com betabloqueador."
        },
        {
            "exame": "ANGIO-TC CORONARIANA",
            "suspeita": "CONTROLE DE ENXERTO OU STENT",
            "decisao": "CONTRASTE INDICADO",
            "comentarios": "Avaliação de perviedade de pontes de safena, artéria mamária ou avaliação intra-stent."
        },
        {
            "exame": "ANGIO-TC DE VEIA CAVA (SUPERIOR OU INFERIOR)",
            "suspeita": "TROMBOSE DE VEIA CAVA OU SÍNDROME COMPRESSIVA",
            "decisao": "CONTRASTE INDICADO",
            "comentarios": "Protocolo com retardo de tempo adequado para fase venosa sistêmica."
        },
        {
            "exame": "ANGIO-TC SISTÊMICA (WHOLE BODY CT)",
            "suspeita": "POLITRAUMATISMO GRAVE",
            "decisao": "CONTRASTE INDICADO",
            "comentarios": "Varredura do crânio à sínfise púbica para identificação rápida de sangramento ativo (blush) ou lesões orgânicas catastróficas."
        }
    ],
    "Coluna": [
        {
            "exame": "TC DE COLUNA CERVICAL",
            "suspeita": "TRAUMA CERVICAL / CHICOTE",
            "decisao": "CONTRASTE NÃO INDICADO",
            "comentarios": "Pesquisa de fraturas, luxações ou instabilidade óssea."
        },
        {
            "exame": "TC DE COLUNA TORACOLOMBAR",
            "suspeita": "TRAUMA DE ALTO IMPACTO OU QUEDA",
            "decisao": "CONTRASTE NÃO INDICADO",
            "comentarios": "Avaliação de fraturas por compressão ou explosão."
        },
        {
            "exame": "TC DE COLUNA",
            "suspeita": "LOMBALGIA OU CIATALGIA (HÉRNIA DE DISCO)",
            "decisao": "CONTRASTE NÃO INDICADO",
            "comentarios": "Alternativa quando a RM é contraindicada. Foco em alterações degenerativas e discopatias."
        },
        {
            "exame": "TC DE COLUNA",
            "suspeita": "CONTROLE PÓS-OPERATÓRIO (ARTRODESE)",
            "decisao": "CONTRASTE NÃO INDICADO",
            "comentarios": "Verificação do posicionamento de parafusos, hastes e fusão óssea."
        },
        {
            "exame": "TC DE COLUNA",
            "suspeita": "SUSPEITA DE ESPONDILODISCITE OU OSTEOMIELITE",
            "decisao": "CONTRASTE INDICADO",
            "comentarios": "Pesquisa de infecção no disco e osso, e mapeamento de abscesso paravertebral/epidural."
        },
        {
            "exame": "TC DE COLUNA",
            "suspeita": "PESQUISA DE METÁSTASES ÓSSEAS",
            "decisao": "CONTRASTE NÃO INDICADO",
            "comentarios": "Foco na janela óssea para detectar lesões líticas ou blásticas."
        },
        {
            "exame": "TC DE COLUNA",
            "suspeita": "ESTENOSE DE CANAL VERTEBRAL",
            "decisao": "CONTRASTE NÃO INDICADO",
            "comentarios": "Avaliação do diâmetro do canal e compressão por hipertrofia óssea ou ligamentar."
        },
        {
            "exame": "TC DE COLUNA",
            "suspeita": "FRATURA PATOLÓGICA",
            "decisao": "CONTRASTE NÃO INDICADO",
            "comentarios": "Avaliação de colapso vertebral sem histórico de trauma significativo (ex: Osteoporose ou Mieloma)."
        },
        {
            "exame": "TC DE COLUNA",
            "suspeita": "MASSA PARAVERTEBRAL OU TUMOR PRIMÁRIO",
            "decisao": "CONTRASTE INDICADO",
            "comentarios": "Avaliação de invasão de partes moles e vascularização da lesão adjacente à coluna."
        },
        {
            "exame": "TC DE COLUNA",
            "suspeita": "PLANEJAMENTO CIRÚRGICO DE DEFORMIDADE (ESCOLIOSE)",
            "decisao": "CONTRASTE NÃO INDICADO",
            "comentarios": "Aquisição para reconstrução 3D e mapeamento anatômico pré-cirúrgico."
        }
    ],
    "Crânio e SNC": [
        {
            "exame": "TC DE CRÂNIO",
            "suspeita": "TCE COM PERDA DE CONSCIÊNCIA",
            "decisao": "CONTRASTE NÃO INDICADO",
            "comentarios": "Traumatismo Cranioencefálico (TCE)"
        },
        {
            "exame": "TC DE CRÂNIO",
            "suspeita": "PESQUISA DE FRATURA DE CALOTA CRANIANA OU BASE DO CRANIO",
            "decisao": "CONTRASTE NÃO INDICADO",
            "comentarios": "Traumatismo Cranioencefálico (TCE)"
        },
        {
            "exame": "TC DE CRÂNIO",
            "suspeita": "SUSPEITA DE HEMATOMA EPIDURAL OU SUBDURAL",
            "decisao": "CONTRASTE NÃO INDICADO",
            "comentarios": "Traumatismo Cranioencefálico (TCE)"
        },
        {
            "exame": "TC DE CRÂNIO",
            "suspeita": "FERIMENTO PENETRANTE NO CRÂNIO",
            "decisao": "CONTRASTE NÃO INDICADO",
            "comentarios": "Traumatismo Cranioencefálico (TCE)"
        },
        {
            "exame": "TC DE CRÂNIO",
            "suspeita": "TCE EM PACIENTE EM USO DE ANTICOAGULANTE",
            "decisao": "CONTRASTE NÃO INDICADO",
            "comentarios": "Traumatismo Cranioencefálico (TCE)"
        },
        {
            "exame": "TC DE CRÂNIO",
            "suspeita": "SUSPEITA DE AVC ISQUÊMICO AGUDO",
            "decisao": "CONTRASTE NÃO INDICADO",
            "comentarios": "Eventos Vasculares Agudos - Protocolo AVC inicial"
        },
        {
            "exame": "TC DE CRÂNIO",
            "suspeita": "SUSPEITA DE AVC HEMORRÁGICO",
            "decisao": "CONTRASTE NÃO INDICADO",
            "comentarios": "Eventos Vasculares Agudos"
        },
        {
            "exame": "ANGIO-TC DE CRÂNIO",
            "suspeita": "ATAQUE ISQUÊMICO TRANSITÓRIO (AIT)",
            "decisao": "CONTRASTE INDICADO",
            "comentarios": "Eventos Vasculares Agudos"
        },
        {
            "exame": "ANGIO-TC DE CRÂNIO",
            "suspeita": "RUPTURA DE ANEURISMA / HEMORRAGIA SUBARACNOIDE",
            "decisao": "CONTRASTE INDICADO",
            "comentarios": "Eventos Vasculares Agudos"
        },
        {
            "exame": "ANGIO-TC VENOSA DE CRÂNIO",
            "suspeita": "SUSPEITA DE TROMBOSE VENOSA CEREBRAL",
            "decisao": "CONTRASTE INDICADO",
            "comentarios": "Eventos Vasculares Agudos - Fase Venosa"
        },
        {
            "exame": "TC DE CRÂNIO",
            "suspeita": "CEFALEIA SÚBITA E DE FORTE INTENSIDADE",
            "decisao": "CONTRASTE NÃO INDICADO",
            "comentarios": "Sintomas Neurológicos (Thunderclap)"
        },
        {
            "exame": "TC DE CRÂNIO",
            "suspeita": "DÉFICIT NEUROLÓGICO FOCAL AGUDO",
            "decisao": "CONTRASTE NÃO INDICADO",
            "comentarios": "Sintomas Neurológicos (Paralisia, afasia)"
        },
        {
            "exame": "TC DE CRÂNIO",
            "suspeita": "PRIMEIRA CRISE CONVULSIVA",
            "decisao": "CONTRASTE INDICADO",
            "comentarios": "Sintomas Neurológicos (Sem causa aparente)"
        },
        {
            "exame": "TC DE CRÂNIO",
            "suspeita": "REBAIXAMENTO DO NÍVEL DE CONSCIÊNCIA INEXPLICADO",
            "decisao": "CONTRASTE NÃO INDICADO",
            "comentarios": "Sintomas Neurológicos"
        },
        {
            "exame": "TC DE CRÂNIO",
            "suspeita": "RASTREAMENTO OU SUSPEITA DE TUMOR PRIMÁRIO",
            "decisao": "CONTRASTE INDICADO",
            "comentarios": "Oncologia e Massas"
        },
        {
            "exame": "TC DE CRÂNIO",
            "suspeita": "PESQUISA DE METÁSTASES CEREBRAIS",
            "decisao": "CONTRASTE INDICADO",
            "comentarios": "Oncologia e Massas"
        },
        {
            "exame": "TC DE CRÂNIO",
            "suspeita": "ACOMPANHAMENTO DE LESÃO EXPANSIVA CONHECIDA",
            "decisao": "CONTRASTE INDICADO",
            "comentarios": "Oncologia e Massas"
        },
        {
            "exame": "TC DE CRÂNIO",
            "suspeita": "SUSPEITA DE ABSCESSO CEREBRAL",
            "decisao": "CONTRASTE INDICADO",
            "comentarios": "Infecção e Inflamação"
        },
        {
            "exame": "TC DE CRÂNIO",
            "suspeita": "COMPLICAÇÕES DE MENINGITE OU ENCEFALITE",
            "decisao": "CONTRASTE INDICADO",
            "comentarios": "Infecção e Inflamação"
        },
        {
            "exame": "TC DE CRÂNIO",
            "suspeita": "INFECÇÃO NO SNC EM PACIENTE IMUNOSSUPRIMIDO",
            "decisao": "CONTRASTE INDICADO",
            "comentarios": "Infecção e Inflamação"
        },
        {
            "exame": "TC DE CRÂNIO",
            "suspeita": "AVALIAÇÃO DE HIDROCEFALIA",
            "decisao": "CONTRASTE NÃO INDICADO",
            "comentarios": "Condições Estruturais"
        },
        {
            "exame": "TC DE CRÂNIO",
            "suspeita": "CONTROLE DE VÁLVULA CATETER DE DVP",
            "decisao": "CONTRASTE NÃO INDICADO",
            "comentarios": "Pós-Operatório"
        },
        {
            "exame": "TC DE CRÂNIO",
            "suspeita": "CONTROLE PÓS-OPERATÓRIO IMEDIATO DE NEUROCIRURGIA",
            "decisao": "CONTRASTE NÃO INDICADO",
            "comentarios": "Pós-Operatório"
        }
    ],
    "Face e Pescoço": [
        {
            "exame": "TC DE SEIOS DA FACE",
            "suspeita": "SINUSITE DE REPETIÇÃO OU CRÔNICA",
            "decisao": "CONTRASTE NÃO INDICADO",
            "comentarios": "Planejamento cirúrgico (FESS) ou falha terapêutica"
        },
        {
            "exame": "TC DE SEIOS DA FACE",
            "suspeita": "SINUSITE AGUDA COM SUSPEITA DE COMPLICAÇÃO",
            "decisao": "CONTRASTE INDICADO",
            "comentarios": "Pesquisa de abscesso ou extensão para tecidos adjacentes"
        },
        {
            "exame": "TC DE SEIOS DA FACE",
            "suspeita": "POLIPOSE NASAL",
            "decisao": "CONTRASTE NÃO INDICADO",
            "comentarios": "Avaliação da extensão da doença"
        },
        {
            "exame": "TC DE SEIOS DA FACE",
            "suspeita": "SUSPEITA DE TUMOR NASOSSINUSAL",
            "decisao": "CONTRASTE INDICADO",
            "comentarios": "Avaliação de invasão óssea e extensão tumoral"
        },
        {
            "exame": "TC DE ÓRBITAS",
            "suspeita": "TRAUMA OCULAR / SUSPEITA DE FRATURA DE ASSOALHO",
            "decisao": "CONTRASTE NÃO INDICADO",
            "comentarios": "Pesquisa de encarceramento de músculo reto inferior"
        },
        {
            "exame": "TC DE ÓRBITAS",
            "suspeita": "CELULITE PERIORBITÁRIA OU ORBITÁRIA",
            "decisao": "CONTRASTE INDICADO",
            "comentarios": "Diferenciação septal e pesquisa de abscesso"
        },
        {
            "exame": "TC DE ÓRBITAS",
            "suspeita": "EXOFTALMIA / OFTALMOPATIA DE GRAVES",
            "decisao": "CONTRASTE NÃO INDICADO",
            "comentarios": "Avaliação de espessamento dos ventres musculares extraoculares"
        },
        {
            "exame": "TC DE FACE",
            "suspeita": "TRAUMA FACIAL COMPLEXO",
            "decisao": "CONTRASTE NÃO INDICADO",
            "comentarios": "Classificação de fraturas Le Fort; gerar reconstruções 3D"
        },
        {
            "exame": "TC DE FACE",
            "suspeita": "INFECÇÃO ODONTOGÊNICA SEVERA",
            "decisao": "CONTRASTE INDICADO",
            "comentarios": "Avaliação de extensão cervical ou formação de abscesso"
        },
        {
            "exame": "TC DE FACE",
            "suspeita": "PESQUISA DE NEOPLASIA / CARCINOMA DE FACE",
            "decisao": "CONTRASTE INDICADO",
            "comentarios": "Estadiamento local"
        },
        {
            "exame": "TC DE ATM",
            "suspeita": "TRAUMA / FRATURA DE ATM",
            "decisao": "CONTRASTE NÃO INDICADO",
            "comentarios": "Avaliação óssea, suspeita de fratura de côndilo"
        },
        {
            "exame": "TC SEIOS DA FACE",
            "suspeita": "SINUSITE SIMPLES",
            "decisao": "CONTRASTE NÃO INDICADO",
            "fase": "SIMPLES",
            "comentarios": ""
        }
    ],
    "Membros Inferiores": [
        {
            "exame": "TC DE BACIA / QUADRIL / JOELHO / TORNOZELO / PÉ",
            "suspeita": "TRAUMA COMPLEXO OU FRATURA ARTICULAR",
            "decisao": "CONTRASTE NÃO INDICADO",
            "comentarios": "Avaliação de fraturas cominutivas, luxações e planejamento cirúrgico ortopédico."
        },
        {
            "exame": "TC DE MEMBRO INFERIOR",
            "suspeita": "PESQUISA DE FRATURA OCULTA OU DE ESTRESSE",
            "decisao": "CONTRASTE NÃO INDICADO",
            "comentarios": "Radiografia inicial normal com clínica persistente (ex: colo do fêmur, calcâneo, navicular)."
        },
        {
            "exame": "TC DE MEMBRO INFERIOR",
            "suspeita": "CONTROLE PÓS-OPERATÓRIO (OSTEOSSÍNTESE)",
            "decisao": "CONTRASTE NÃO INDICADO",
            "comentarios": "Avaliação do posicionamento de parafusos/placas, fixadores e verificação de consolidação óssea."
        },
        {
            "exame": "TC DE MEMBROS INFERIORES",
            "suspeita": "MENSURAÇÃO ÓSSEA (ESCANOMETRIA / ESTUDO DE TORÇÃO)",
            "decisao": "CONTRASTE NÃO INDICADO",
            "comentarios": "Medida de discrepância de membros e cálculo de ângulos de torção femoral e tibial."
        },
        {
            "exame": "ANGIO-TC DE MEMBROS INFERIORES",
            "suspeita": "ISQUEMIA AGUDA OU TRAUMA VASCULAR, ESTENOSE DA POPLITEA,",
            "decisao": "CONTRASTE INDICADO",
            "fase": "ANGIO-TC",
            "comentarios": "Pesquisa de oclusão arterial aguda por trombo/êmbolo ou lesão vascular traumática (run-off)."
        },
        {
            "exame": "ANGIO-TC DE MEMBROS INFERIORES",
            "suspeita": "DOENÇA ARTERIAL OBSTRUTIVA PERIFÉRICA (DAOP)",
            "decisao": "CONTRASTE INDICADO",
            "comentarios": "Avaliação de claudicação intermitente, mapeamento de estenoses e placas calcificadas."
        },
        {
            "exame": "ANGIO-TC DE MEMBROS INFERIORES",
            "suspeita": "MAPEAMENTO VASCULAR PRÉ-INTERVENÇÃO (EX: TAVI)",
            "decisao": "CONTRASTE INDICADO",
            "comentarios": "Avaliação dos eixos ilíaco-femorais para planejamento de acesso endovascular."
        },
        {
            "exame": "TC DE MEMBRO INFERIOR",
            "suspeita": "INFECÇÃO PROFUNDA OU FASCITE NECROSANTE",
            "decisao": "CONTRASTE INDICADO",
            "comentarios": "Pesquisa de coleções, abscessos e gás nos tecidos de partes moles (ex: pé diabético complicado)."
        },
        {
            "exame": "TC DE MEMBRO INFERIOR",
            "suspeita": "OSTEOMIELITE AGUDA OU CRÔNICA",
            "decisao": "CONTRASTE INDICADO",
            "comentarios": "Avaliação de destruição cortical, presença de sequestro ósseo e fístulas associadas."
        },
        {
            "exame": "TC DE MEMBRO INFERIOR",
            "suspeita": "AVALIAÇÃO DE MASSA OU TUMOR ÓSSEO",
            "decisao": "CONTRASTE INDICADO",
            "comentarios": "Caracterização de lesões líticas/blásticas e invasão cortical (RM é complementar para partes moles)."
        }
    ],
    "Membros Superiores": [
        {
            "exame": "TC DE OMBRO / COTOVELO / PUNHO",
            "suspeita": "TRAUMA COMPLEXO OU FRATURA ARTICULAR",
            "decisao": "CONTRASTE NÃO INDICADO",
            "comentarios": "Avaliação pré-operatória, mapeamento de fragmentos ósseos e luxações associadas."
        },
        {
            "exame": "TC DE PUNHO",
            "suspeita": "PESQUISA DE FRATURA OCULTA (EX: ESCAFOIDE)",
            "decisao": "CONTRASTE NÃO INDICADO",
            "comentarios": "Pacientes com dor na tabaqueira anatômica e radiografia inicial normal ou duvidosa."
        },
        {
            "exame": "TC DE OMBRO / CLAVÍCULA",
            "suspeita": "LUXAÇÃO ESTERNOCLAVICULAR OU ACROMIOCLAVICULAR",
            "decisao": "CONTRASTE NÃO INDICADO",
            "comentarios": "Avaliação de instabilidade articular e posicionamento ósseo das extremidades da clavícula."
        },
        {
            "exame": "TC DE MEMBRO SUPERIOR",
            "suspeita": "CONTROLE PÓS-OPERATÓRIO (OSTEOSSÍNTESE)",
            "decisao": "CONTRASTE NÃO INDICADO",
            "comentarios": "Avaliação do posicionamento de placas, parafusos articulares e verificação de consolidação óssea."
        },
        {
            "exame": "ANGIO-TC DE MEMBRO SUPERIOR",
            "suspeita": "TRAUMA VASCULAR OU ISQUEMIA AGUDA",
            "decisao": "CONTRASTE INDICADO",
            "comentarios": "Pesquisa de oclusão arterial, laceração ou pseudoaneurisma pós-trauma."
        },
        {
            "exame": "ANGIO-TC DE MEMBRO SUPERIOR",
            "suspeita": "SÍNDROME DO DESFILADEIRO TORÁCICO",
            "decisao": "CONTRASTE INDICADO",
            "comentarios": "Avaliação de compressão vascular subclávia/axilar; frequentemente exige aquisição dinâmica (braços abaixados e elevados)."
        },
        {
            "exame": "ANGIO-TC DE MEMBRO SUPERIOR",
            "suspeita": "TROMBOSE VENOSA PROFUNDA (TVP) DE MEMBRO SUPERIOR",
            "decisao": "CONTRASTE INDICADO",
            "comentarios": "Fase venosa tardia para mapear falhas de enchimento (comum em pacientes com cateteres venosos centrais ou PICC)."
        },
        {
            "exame": "TC DE MEMBRO SUPERIOR",
            "suspeita": "INFECÇÃO PROFUNDA OU ABSCESSO EM PARTES MOLES",
            "decisao": "CONTRASTE INDICADO",
            "comentarios": "Diferenciação entre celulite extensa, formação de abscesso e sinais de fascite necrosante (gás nos tecidos)."
        },
        {
            "exame": "TC DE MEMBRO SUPERIOR",
            "suspeita": "OSTEOMIELITE AGUDA OU CRÔNICA",
            "decisao": "CONTRASTE INDICADO",
            "comentarios": "Avaliação de destruição cortical, presença de sequestro ósseo e coleções adjacentes."
        },
        {
            "exame": "TC DE MEMBRO SUPERIOR",
            "suspeita": "AVALIAÇÃO DE MASSA OU TUMOR ÓSSEO",
            "decisao": "CONTRASTE INDICADO",
            "comentarios": "Planejamento cirúrgico e avaliação de extensão óssea/cortical (a RM costuma ser o exame complementar padrão-ouro para as partes moles)."
        }
    ],
    "Tórax": [
        {
            "exame": "TC DE TÓRAX DE ALTA RESOLUÇÃO (TCAR)",
            "suspeita": "DOENÇA PULMONAR INTERSTICIAL OU FIBROSE",
            "decisao": "CONTRASTE NÃO INDICADO",
            "fase": "ALTA RESOLUCAO",
            "comentarios": "Foco na avaliação fina do parênquima pulmonar; decúbito ventral opcional."
        },
        {
            "exame": "TC DE TÓRAX DE ALTA RESOLUÇÃO (TCAR)",
            "suspeita": "ENFISEMA PULMONAR OU DPOC",
            "decisao": "CONTRASTE NÃO INDICADO",
            "fase": "ALTA RESOLUCAO",
            "comentarios": "Avaliação de aprisionamento aéreo (fases inspiratória e expiratória)."
        },
        {
            "exame": "TC DE TÓRAX DE ALTA RESOLUÇÃO (TCAR)",
            "suspeita": "BRONQUIECTASIAS",
            "decisao": "CONTRASTE NÃO INDICADO",
            "fase": "ALTA RESOLUCAO",
            "comentarios": "Pesquisa de dilatações brônquicas crônicas."
        },
        {
            "exame": "TC DE TÓRAX",
            "suspeita": "INFECÇÃO VIRAL (EX: COVID-19)",
            "decisao": "CONTRASTE NÃO INDICADO",
            "fase": "SIMPLES",
            "comentarios": "Pesquisa de opacidades em vidro fosco e consolidações."
        },
        {
            "exame": "TC DE TÓRAX (BAIXA DOSE / LOW DOSE)",
            "suspeita": "RASTREAMENTO DE CÂNCER DE PULMÃO (NÓDULO PULMONAR)",
            "decisao": "CONTRASTE NÃO INDICADO",
            "fase": "BAIXA DOSE",
            "comentarios": "Protocolo de baixa dose de radiação para pacientes tabagistas."
        },
        {
            "exame": "TC DE TÓRAX",
            "suspeita": "PNEUMONIA SIMPLES",
            "decisao": "CONTRASTE NÃO INDICADO",
            "fase": "SIMPLES",
            "comentarios": "Protocolo padrão para consolidações sem suspeita de complicação."
        },
        {
            "exame": "TC DE TÓRAX",
            "suspeita": "PNEUMONIA COMPLICADA",
            "decisao": "CONTRASTE INDICADO",
            "fase": "PROTOCOLO ESPECIAL",
            "comentarios": "Pesquisa de empiema ou necrose."
        },
        {
            "exame": "TC DE TÓRAX",
            "suspeita": "ABSCESSO PULMONAR",
            "decisao": "CONTRASTE INDICADO",
            "fase": "PORTAL",
            "comentarios": "Diferenciação entre consolidação e abscesso/necrose."
        },
        {
            "exame": "TC DE TÓRAX",
            "suspeita": "DERRAME PLEURAL",
            "decisao": "CONTRASTE INDICADO",
            "fase": "PORTAL",
            "comentarios": "Fase sem contraste e fase venosa para avaliação pleural."
        },
        {
            "exame": "TC DE TÓRAX",
            "suspeita": "TRAUMA TORÁCICO MAIOR",
            "decisao": "CONTRASTE INDICADO",
            "fase": "PORTAL",
            "comentarios": "Pesquisa de lesão vascular, sangramento ativo ou contusão severa."
        },
        {
            "exame": "ANGIO-TC DE TÓRAX (PROTOCOLO TEP)",
            "suspeita": "TROMBOEMBOLISMO PULMONAR (TEP)",
            "decisao": "CONTRASTE INDICADO",
            "fase": "ARTERIAL PULMONAR",
            "comentarios": "Foco arterial pulmonar estrito; bolus tracking no tronco da pulmonar."
        },
        {
            "exame": "ANGIO-TC DE AORTA TORÁCICA",
            "suspeita": "DISSECÇÃO OU ANEURISMA DE AORTA",
            "decisao": "CONTRASTE INDICADO",
            "fase": "ARTERIAL AORTICA",
            "comentarios": "Aquisição com gating cardíaco (ECG) recomendada para evitar artefato de pulsação."
        },
        {
            "exame": "TC DE TÓRAX",
            "suspeita": "NEOPLASIA DE MAMA, ESOFAGO OU MEDIASTINO",
            "decisao": "CONTRASTE INDICADO",
            "fase": "PORTAL",
            "comentarios": "Protocolo institucional: contraste indicado para avaliação de CA de mama, esôfago ou tumores mediastinais."
        },
        {
            "exame": "TC DE TÓRAX",
            "suspeita": "NEOPLASIA PULMONAR",
            "decisao": "CONTRASTE INDICADO",
            "fase": "PORTAL",
            "comentarios": "Avaliação de massa pulmonar primária e invasão de estruturas mediastinais."
        },
        {
            "exame": "TC DE TÓRAX",
            "suspeita": "ESTADIAMENTO ONCOLOGICO GERAL",
            "decisao": "CONTRASTE NÃO INDICADO",
            "fase": "SIMPLES",
            "comentarios": "Estadiamentos torácicos gerais (ex: próstata, cólon) sem indicação de contraste pelo protocolo."
        }
    ],
    "Pelve": [
        {
            "exame": "TC DE PELVE",
            "suspeita": "APENDICITE AGUDA",
            "decisao": "CONTRASTE INDICADO",
            "fase": "",
            "comentarios": "Avaliação de espessamento do apêndice, borramento da gordura adjacente e pesquisa de coleções."
        },
        {
            "exame": "TC DE PELVE",
            "suspeita": "DIVERTICULITE AGUDA",
            "decisao": "CONTRASTE INDICADO",
            "fase": "",
            "comentarios": "Focada na avaliação do cólon sigmoide e pesquisa de complicações como perfuração ou abscesso."
        },
        {
            "exame": "TC DE PELVE",
            "suspeita": "CÓLICA NEFRÉTICA / CÁLCULO NO URETER DISTAL",
            "decisao": "CONTRASTE NÃO INDICADO",
            "fase": "",
            "comentarios": "Pesquisa de cálculos no trajeto do ureter pélvico e junção ureterovesical."
        },
        {
            "exame": "TC DE PELVE",
            "suspeita": "TRAUMA PÉLVICO OU FRATURA DE BACIA",
            "decisao": "CONTRASTE NÃO INDICADO",
            "fase": "",
            "comentarios": "Foco ósseo na avaliação de fraturas do anel pélvico e acetábulo (se não houver suspeita de sangramento ativo)."
        },
        {
            "exame": "TC DE PELVE",
            "suspeita": "ESTADIAMENTO ONCOLÓGICO (BEXIGA, PRÓSTATA, RETO OU GINECOLÓGICO)",
            "decisao": "CONTRASTE INDICADO",
            "fase": "",
            "comentarios": "Pesquisa de linfonodos ilíacos aumentados, ascite e invasão de estruturas adjacentes."
        },
        {
            "exame": "TC DE PELVE",
            "suspeita": "MASSA PÉLVICA A ESCLARECER",
            "decisao": "CONTRASTE INDICADO",
            "fase": "",
            "comentarios": "Avaliação inicial de lesões expansivas ovarianas, uterinas ou anexiais."
        },
        {
            "exame": "TC DE PELVE",
            "suspeita": "DOENÇA INFLAMATÓRIA PÉLVICA (DIPA) OU ABSCESSO",
            "decisao": "CONTRASTE INDICADO",
            "fase": "",
            "comentarios": "Pesquisa de coleções tubo-ovarianas ou abscessos em fundo de saco."
        },
        {
            "exame": "TC DE PELVE",
            "suspeita": "PESQUISA DE FÍSTULA PÉLVICA",
            "decisao": "CONTRASTE INDICADO",
            "fase": "",
            "comentarios": "Pode exigir administração de contraste via retal ou oral tardio para delinear fístulas colovesicais ou retovaginais."
        },
        {
            "exame": "TC DE PELVE (CISTOTOMOGRAFIA)",
            "suspeita": "TRAUMA VESICAL / RUPTURA DE BEXIGA",
            "decisao": "CONTRASTE INDICADO",
            "fase": "",
            "comentarios": "Exige instilação de contraste diluído via sonda vesical (Foley) para distender a bexiga e ver extravasamentos."
        },
        {
            "exame": "ANGIO-TC DE PELVE",
            "suspeita": "SANGRAMENTO PÉLVICO ATIVO OU ANEURISMA ILÍACO",
            "decisao": "CONTRASTE INDICADO",
            "fase": "",
            "comentarios": "Fase arterial pura para identificar 'blush' vascular em traumas graves ou doença aterosclerótica ilíaca."
        }
    ],
    "Mama": [
        {
            "exame": "RM DE MAMA",
            "suspeita": "AVALIAÇÃO DE NÓDULO SUSPEITO OU BIRADS 4/5",
            "decisao": "CONTRASTE INDICADO",
            "fase": "DINÂMICA",
            "comentarios": "Protocolo dinâmico com contraste paramagnético essencial para caracterização de nódulos suspeitos."
        },
        {
            "exame": "RM DE MAMA",
            "suspeita": "AVALIAÇÃO DE IMPLANTE DE SILICONE",
            "decisao": "CONTRASTE NÃO INDICADO",
            "fase": "SIMPLES",
            "comentarios": "Foco na integridade da prótese (pesquisa de ruptura intracapsular ou extracapsular)."
        }
    ],
    "Coluna Cervical": [
        {
            "exame": "TC DE COLUNA CERVICAL",
            "suspeita": "TRAUMA CERVICAL / CHICOTE",
            "decisao": "CONTRASTE NÃO INDICADO",
            "fase": "OSSO",
            "comentarios": "Pesquisa de fraturas, luxações ou instabilidade óssea."
        },
        {
            "exame": "RM DE COLUNA CERVICAL",
            "suspeita": "CERVICALGIA OU CERVICOBRAQUIALGIA",
            "decisao": "CONTRASTE NÃO INDICADO",
            "fase": "SIMPLES",
            "comentarios": "Avaliação de hérnia de disco e compressão radicular."
        }
    ],
    "Coluna Torácica": [
        {
            "exame": "TC DE COLUNA TORÁCICA",
            "suspeita": "TRAUMA DE ALTO IMPACTO",
            "decisao": "CONTRASTE NÃO INDICADO",
            "fase": "OSSO",
            "comentarios": "Avaliação de fraturas por compressão ou explosão."
        }
    ],
    "Coluna Lombar": [
        {
            "exame": "TC DE COLUNA LOMBAR",
            "suspeita": "LOMBALGIA OU CIATALGIA (HÉRNIA DE DISCO)",
            "decisao": "CONTRASTE NÃO INDICADO",
            "fase": "SIMPLES",
            "comentarios": "Alternativa quando a RM é contraindicada. Foco em alterações degenerativas e discopatias."
        },
        {
            "exame": "RM DE COLUNA LOMBAR",
            "suspeita": "SUSPEITA DE ESPONDILODISCITE",
            "decisao": "CONTRASTE INDICADO",
            "fase": "T1 COM GADOLÍNIO",
            "comentarios": "Pesquisa de infecção no disco e osso."
        }
    ],
    "Coluna Sacral": [
        {
            "exame": "TC DE SACRO E CÓCCIX",
            "suspeita": "TRAUMA OU QUEDA SENTADA",
            "decisao": "CONTRASTE NÃO INDICADO",
            "fase": "OSSO",
            "comentarios": "Pesquisa de fratura sacrococcígea."
        }
    ]
};

const dicionarioMotor = [
    {
        "termo": "PNEUMONIA COMPLICADA",
        "sinonimos": [
            "PNEUMONIA GRAVE",
            "EMPIEMA",
            "PNEUMONIA NECROTIZANTE"
        ]
    },
    {
        "termo": "PNEUMONIA SIMPLES",
        "sinonimos": [
            "PNEUMONIA",
            "CONSOLIDACAO",
            "BRONCOPNEUMONIA",
            "INFECCAO PULMONAR",
            "BRONQUITE"
        ]
    },
    {
        "termo": "DERRAME PLEURAL",
        "sinonimos": [
            "COLECAO PLEURAL",
            "DERRAME LAMINAR",
            "DERRAME LOCULADO",
            "DERRAME CISSURAL"
        ]
    },
    {
        "termo": "ABSCESSO PULMONAR",
        "sinonimos": [
            "ABSCESSO NO PULMAO",
            "CAVIDADE PULMONAR",
            "COLECAO INFECCIOSA PULMONAR"
        ]
    },
    {
        "termo": "DOENÇA PULMONAR INTERSTICIAL OU FIBROSE",
        "sinonimos": [
            "FIBROSE PULMONAR",
            "PNEUMONITE",
            "DPI",
            "DOENCA INTERSTICIAL",
            "INFILTRADO INTERSTICIAL",
            "PNEUMOPATIA"
        ]
    },
    {
        "termo": "NEOPLASIA DE MAMA, ESOFAGO OU MEDIASTINO",
        "sinonimos": [
            "CA DE MAMA",
            "CANCER DE MAMA",
            "CA DE ESOFAGO",
            "CANCER DE ESOFAGO",
            "TUMOR DE MEDIASTINO",
            "MASSA MEDIASTINAL",
            "LINFOMA MEDIASTINAL",
            "ESTADIAMENTO ONCOLOGICO DE MAMA",
            "ESTADIAMENTO MAMA"
        ]
    },
    {
        "termo": "NEOPLASIA PULMONAR",
        "sinonimos": [
            "CA DE PULMAO",
            "CANCER DE PULMAO",
            "MASSA PULMONAR",
            "NEOPLASIA DE PULMAO",
            "TUMOR PULMONAR"
        ]
    },
    {
        "termo": "TROMBOEMBOLISMO PULMONAR (TEP)",
        "sinonimos": [
            "TEP",
            "EMBOLIA PULMONAR",
            "TROMBOSE PULMONAR"
        ]
    },
    {
        "termo": "ESTADIAMENTO ONCOLOGICO GERAL",
        "sinonimos": [
            "ESTADIAMENTO",
            "PESQUISA DE METASTASE",
            "CONTROLE ONCOLOGICO",
            "ESTADIAMENTO ONCOLOGICO"
        ]
    },
    {
        "termo": "APENDICITE AGUDA",
        "sinonimos": [
            "SUSPEITA DE APENDICITE",
            "DOR EM FOSSA ILIACA DIREITA",
            "FID",
            "DOR NO APENDICE"
        ]
    },
    {
        "termo": "DIVERTICULITE AGUDA",
        "sinonimos": [
            "DIVERTICULITE",
            "DOR EM FOSSA ILIACA ESQUERDA",
            "FIE",
            "DIVERTICULOS INFLAMADOS"
        ]
    },
    {
        "termo": "CÓLICA NEFRÉTICA OU LITÍASE RENAL",
        "sinonimos": [
            "COLICA RENAL",
            "CALCULO RENAL",
            "PEDRA NOS RINS",
            "LITIASE RENAL",
            "UROLITIASE",
            "NEFROLITIASE"
        ]
    },
    {
        "termo": "PANCREATITE AGUDA OU COMPLICAÇÕES",
        "sinonimos": [
            "PANCREATITE",
            "INFLAMACAO NO PANCREAS"
        ]
    },
    {
        "termo": "TRAUMA ABDOMINAL (FÍGADO, BAÇO OU RINS)",
        "sinonimos": [
            "TRAUMA FECHADO",
            "CONTUSAO ABDOMINAL",
            "ACIDENTE AUTOMOVILISTICO",
            "TRAUMA HEPATICO",
            "TRAUMA ESPLENICO"
        ]
    },
    {
        "termo": "MASSA OU NÓDULO ADRENAL (INCIDENTALOMA)",
        "sinonimos": [
            "NODULO NA SUPRARENAL",
            "ADENOMA ADRENAL",
            "MASSA ADRENAL",
            "INCIDENTALOMA"
        ]
    },
    {
        "termo": "TCE COM PERDA DE CONSCIÊNCIA",
        "sinonimos": [
            "TCE",
            "TRAUMATISMO CRANIANO",
            "PANCADA NA CABECA",
            "TRAUMA CRANIOENCEFALICO"
        ]
    },
    {
        "termo": "SUSPEITA DE AVC ISQUÊMICO AGUDO",
        "sinonimos": [
            "AVCI",
            "AVC",
            "DERRAME CEREBRAL",
            "DEFICIT NEUROLOGICO AGUDO",
            "ISQUEMIA CEREBRAL"
        ]
    },
    {
        "termo": "SUSPEITA DE AVC HEMORRÁGICO",
        "sinonimos": [
            "AVCH",
            "HEMORRAGIA CEREBRAL",
            "SANGRAMENTO INTRACRANIANO",
            "HEMATOMA CEREBRAL"
        ]
    },
    {
        "termo": "CEFALEIA SÚBITA E DE FORTE INTENSIDADE",
        "sinonimos": [
            "CEFALEIA THUNDERCLAP",
            "DOR DE CABECA SUBITA",
            "CEFALEIA EM TROVOADA",
            "PIOR DOR DE CABECA DA VIDA"
        ]
    },
    {
        "termo": "LOMBALGIA OU CIATALGIA (HÉRNIA DE DISCO)",
        "sinonimos": [
            "DOR LOMBAR",
            "DOR CIATICA",
            "HERNIA DISCAL",
            "PROTRUSAO DISCAL",
            "CIATALGIA",
            "LOMBALGIA"
        ]
    },
    {
        "termo": "TRAUMA CERVICAL / CHICOTE",
        "sinonimos": [
            "TRAUMA NA COLUNA",
            "EFEITO CHICOTE",
            "DOR CERVICAL POS TRAUMA",
            "WHIPLASH"
        ]
    },
    {
        "termo": "SUSPEITA DE ESPONDILODISCITE OU OSTEOMIELITE",
        "sinonimos": [
            "INFECCAO NA COLUNA",
            "DISCITE",
            "OSTEOMIELITE VERTEBRAL",
            "ESPONDILODISCITE"
        ]
    },
    {
        "termo": "TRAUMA COMPLEXO OU FRATURA ARTICULAR",
        "sinonimos": [
            "FRATURA COMINUTIVA",
            "LUXACAO ARTICULAR",
            "FRATURA DE BACIA",
            "FRATURA COMPLEXA"
        ]
    },
    {
        "termo": "ANEURISMA DE AORTA (PLANEJAMENTO EVAR/TEVAR)",
        "sinonimos": [
            "ANEURISMA AORTICO",
            "DILATACAO DA AORTA",
            "AORTA ABDOMINAL DILATADA",
            "AAA"
        ]
    },
    {
        "termo": "DISSECÇÃO AÓRTICA (TIPO A OU B)",
        "sinonimos": [
            "DISSECCAO DE AORTA",
            "RASGO NA AORTA",
            "SINDROME AORTICA AGUDA"
        ]
    },
    {
        "termo": "ISQUEMIA AGUDA OU TRAUMA VASCULAR",
        "sinonimos": [
            "PE FRIO",
            "PULSO AUSENTE",
            "OCLUSAO ARTERIAL",
            "TROMBOSE ARTERIAL",
            "EMBOLIA ARTERIAL"
        ]
    },
    {
        "termo": "ABSCESSO",
        "sinonimos": [
            "COLECAO PURULENTA",
            "INFECCAO COM NECROSE",
            "COLECAO INFECCIOSA",
            "ABSCESSO HEPATICO",
            "ABSCESSO ESPLENICO"
        ]
    },
    {
        "termo": "SINUSITE AGUDA COM SUSPEITA DE COMPLICAÇÃO",
        "sinonimos": [
            "SINUSITE COMPLICADA",
            "CELULITE ORBITARIA POS SINUSITE",
            "SINUSITE COM COMPLICACAO"
        ]
    },
    {
        "termo": "SINUSITE DE REPETIÇÃO OU CRÔNICA",
        "sinonimos": [
            "SINUSITE CRONICA",
            "SINUSITE SIMPLES",
            "RINOSSINUSITE",
            "SINUSITE",
            "POLIPOSE NASAL"
        ]
    }
];
