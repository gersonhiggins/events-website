// Centralized item definitions for the budget builder
export const ITEM_GROUPS = {
  Pasapalos: [
    { id: 'tequenos', name: 'Tequeños', price: 0.80, perPersonFactor: 2 }, // Mantiene factor 2 por costumbre en eventos
    { id: 'empanaditas', name: 'Empanaditas (queso, carne o pollo)', price: 1.20, perPersonFactor: 1 },
    { id: 'kipe_falafel_crema_berenjena', name: 'Kipe o falafel con crema de berenjena', price: 1.70, perPersonFactor: 1 },
    { id: 'bolitas_carne', name: 'Bolitas de carne', price: 1.20, perPersonFactor: 1 },
    { id: 'mini_lumpias', name: 'Mini lumpias', price: 1.70, perPersonFactor: 1 },
    { id: 'corndog', name: 'Corndog', price: 1.50, perPersonFactor: 1 },
    { id: 'mini_pastel_chucho', name: 'Mini pastel de chucho', price: 1.50, perPersonFactor: 1 },
    { id: 'empanaditas_masa_yuca', name: 'Empanaditas de carne (masa de yuca)', price: 1.20, perPersonFactor: 1 },
    { id: 'pastelitos_andinos', name: 'Pastelitos andinos', price: 1.20, perPersonFactor: 1 },
    { id: 'canape_carpacho_lomito_atun', name: 'Canapé de carpacho de lomito o atún blanco', price: 1.70, perPersonFactor: 1 },
    { id: 'enrollados_carne_tocineta_queso', name: 'Enrollados de carne, tocineta y queso', price: 1.60, perPersonFactor: 1 },
    { id: 'mini_hamburguesas', name: 'Mini hamburguesas', price: 2.50, perPersonFactor: 1 },
    { id: 'pinchos_carne_pimiento_cebolla', name: 'Pinchos de carne, pimiento y cebolla', price: 3.00, perPersonFactor: 1 },
    { id: 'bunuelos_yuca_dulces', name: 'Buñuelos de yuca dulces', price: 1.20, perPersonFactor: 1 },
    { id: 'ceviche_canoa_platano', name: 'Ceviche en canoa de plátano verde', price: 1.70, perPersonFactor: 1 },
    { id: 'tartaletas_alcachofa_salmon_camaron_atun', name: 'Tartaletas de alcachofa, salmón, camarón o atún con queso crema', price: 1.50, perPersonFactor: 1 },
    { id: 'brocheta_carne_pollo_vegetales', name: 'Brocheta de carne o pollo con vegetales', price: 3.00, perPersonFactor: 1 },
    { id: 'pastelitos_camaron', name: 'Pastelitos de camarón', price: 1.70, perPersonFactor: 1 },
    { id: 'ojos_de_buey', name: 'Ojos de buey (tocineta y ciruela pasa)', price: 1.50, perPersonFactor: 1 },
    { id: 'bolitas_papa_yuca_carne_queso', name: 'Bolitas de papa o yuca rellenas de carne y queso', price: 1.50, perPersonFactor: 1 },
    { id: 'fajitas_camarones', name: 'Fajitas de camarones', price: 1.70, perPersonFactor: 1 },
    { id: 'langostinos_empanizados_salsa_alcaparra', name: 'Langostinos empanizados con salsa de alcaparra', price: 2.00, perPersonFactor: 1 },
    { id: 'mini_crepes_camaron_champinones', name: 'Mini crepes de camarón o champiñones', price: 2.00, perPersonFactor: 1 },
    { id: 'ajies_dulces_empanizados_rellenos', name: 'Ajíes dulces empanizados y rellenos de carne', price: 2.50, perPersonFactor: 1 },
    { id: 'chicharron_pollo', name: 'Chicharrón de pollo', price: 1.50, perPersonFactor: 1 },
    { id: 'conos_mexicanos', name: 'Conos mexicanos', price: 1.70, perPersonFactor: 1 }
  ],
  PrimerPlato: [
    { id: 'risotto_champinones', name: 'Risotto de champiñones', price: 8.00, perPersonFactor: 1 },
    { id: 'tortellini_espinaca_ricota_salmon_carne', name: 'Tortellini espinaca-ricota, salmón o carne', price: 10.00, perPersonFactor: 1 },
    { id: 'ensalada_cesar_pollo', name: 'Ensalada César con pollo', price: 8.00, perPersonFactor: 1 },
    { id: 'cazuela_pulpo_camarones_ajillo', name: 'Cazuela de pulpo y camarones al ajillo', price: 12.00, perPersonFactor: 1 },
    { id: 'noguis_papas_salsa', name: 'Ñoquis de papas en salsa de su preferencia', price: 8.00, perPersonFactor: 1 },
    { id: 'chupe', name: 'Chupe', price: 6.00, perPersonFactor: 1 },
    { id: 'jamon_serrano_esparragos', name: 'Jamón serrano con espárragos', price: 10.00, perPersonFactor: 1 },
    { id: 'jamon_serrano_quesos', name: 'Jamón serrano y quesos', price: 15.00, perPersonFactor: 1 }
  ],
  PlatosInfantiles: [
    { id: 'hamburguesa_papas_fritas', name: 'Hamburguesa al gusto con papas fritas', price: 10.00, perPersonFactor: 1 },
    { id: 'nuggets_pollo_papas', name: 'Nugget de pollo con papas fritas', price: 7.00, perPersonFactor: 1 },
    { id: 'arroz_chino', name: 'Arroz chino', price: 7.00, perPersonFactor: 1 },
    { id: 'pasta_bologna_napole', name: 'Pasta bologna o napole', price: 6.00, perPersonFactor: 1 }
  ],
  PlatosFuertes: [
    { id: 'pollo_curry_papas_ensalada', name: 'Pollo al curry con papas y ensalada', price: 9.00, perPersonFactor: 1 },
    { id: 'medallones_lomito_vino', name: 'Medallones de lomito al vino con papas y ensalada', price: 15.00, perPersonFactor: 1 },
    { id: 'carne_lenia_papas_vegetales', name: 'Carne a la leña con papas y vegetales asados', price: 12.00, perPersonFactor: 1 },
    { id: 'lebranche_lenia_contornos', name: 'Lebranche a la leña con dos contornos', price: 12.00, perPersonFactor: 1 },
    { id: 'roast_beef_contornos', name: 'Roast beef con dos contornos', price: 12.00, perPersonFactor: 1 },
    { id: 'plato_navidenio_sencillo', name: 'Plato navideño sencillo: hallaca, ensalada, pan de jamón', price: 12.00, perPersonFactor: 1 },
    { id: 'plato_navidenio_completo', name: 'Plato navideño: hallaca, pernil, ensalada, pan de jamón', price: 15.00, perPersonFactor: 1 },
    { id: 'salteado_solomo_camarones', name: 'Salteado de solomo, camarones, cebolla y pimentón con papas y ensalada', price: 15.00, perPersonFactor: 1 },
    { id: 't_bone_lenia_papas_brava', name: 'T-Bone a la leña con papas a la brava y ensalada', price: 18.00, perPersonFactor: 1 },
    { id: 'parrilla_completa', name: 'Parrilla: solomo, chorizo, morcilla, hallaquita y ensalada', price: 17.00, perPersonFactor: 1 },
    { id: 'pescado_crema_blanca_camarones', name: 'Pescado en crema blanca con camarones y dos contornos', price: 15.00, perPersonFactor: 1 },
    { id: 'pescado_crema_coco_camarones_tai', name: 'Pescado en crema de coco y camarones tai', price: 15.00, perPersonFactor: 1 },
    { id: 'paella', name: 'Paella', price: 18.00, perPersonFactor: 1 },
    { id: 'tomahawk_papas_brava', name: 'Tomahawk con papas a la brava y ensalada', price: 25.00, perPersonFactor: 1 },
    { id: 'lomito_salsa_blanca_jamon_serrano', name: 'Lomito en salsa blanca con jamón serrano y tocineta más contornos', price: 18.00, perPersonFactor: 1 },
    { id: 'pollo_crema_champinones_jamon_serrano', name: 'Pollo en crema champiñones, jamón serrano y tocineta más contornos', price: 14.00, perPersonFactor: 1 },
    { id: 'tataki_atun_marinado', name: 'Tataki de atún marinado con contornos', price: 15.00, perPersonFactor: 1 },
    { id: 'salmon_costra_pistachos', name: 'Salmón en costra de pistachos con contornos', price: 22.00, perPersonFactor: 1 }
  ],
  Postres: [
    { id: 'torta_decorada_persona', name: 'Torta decorada por persona', price: 5.00, perPersonFactor: 1 },
    { id: 'dulce_lechosa', name: 'Dulce de lechosa', price: 3.00, perPersonFactor: 1 },
    { id: 'torta_chocolate_quesillo_pan', name: 'Torta de chocolate, torta-quesillo o torta de pan', price: 4.00, perPersonFactor: 1 },
    { id: 'pie_limon_parchita', name: 'Pie de limón o parchita', price: 5.00, perPersonFactor: 1 },
    { id: 'pastel_manzana', name: 'Pastel de manzana', price: 5.00, perPersonFactor: 1 },
    { id: 'torta_queso', name: 'Torta de queso', price: 5.00, perPersonFactor: 1 },
    { id: 'brownie_helado', name: 'Brownie con helado', price: 5.00, perPersonFactor: 1 }
  ],
  Bebidas: [
    // Descorches (Mantienen los factores proporcionales por botella que tenías antes según el tipo de alcohol)
    { id: 'descorche_ron', name: 'Descorche ron botella 0.75', price: 15.00, perPersonFactor: 0.15 },
    { id: 'descorche_whisky', name: 'Descorche whisky botella 0.75 (lleva hielo, 2 agua y 1 soda)', price: 15.00, perPersonFactor: 0.15 },
    { id: 'descorche_vino', name: 'Descorche vino botella 0.75 (lleva hielo, 2 refrescos y limón)', price: 7.00, perPersonFactor: 0.22 },
    { id: 'descorche_sangria', name: 'Descorche sangría litro y medio', price: 12.00, perPersonFactor: 0.22 },
    // Servicios y Bebidas Individuales
    { id: 'servicio_ron_carupano_st', name: 'Servicio ron Carúpano o Santa Teresa', price: 27.00, perPersonFactor: 0.15 },
    { id: 'servicio_vodka_gordons', name: 'Servicio vodka Gordons', price: 18.00, perPersonFactor: 0.15 },
    { id: 'servicio_whisky_8_anos', name: 'Servicio whisky 8 años', price: 40.00, perPersonFactor: 0.15 },
    { id: 'servicio_whisky_12_anos', name: 'Servicio whisky 12 años', price: 70.00, perPersonFactor: 0.15 },
    { id: 'agua_mineral', name: 'Agua mineral', price: 1.40, perPersonFactor: 1 },
    { id: 'cerveza_polarcita_light', name: 'Cervezas Polarcita o Light', price: 1.40, perPersonFactor: 1 },
    { id: 'cerveza_solera', name: 'Solera', price: 1.40, perPersonFactor: 1 },
    { id: 'cerveza_destilo_artesanal', name: 'Destilo artesanal de tercio', price: 1.80, perPersonFactor: 1 },
    { id: 'refrescos_vaso', name: 'Refrescos (en vaso)', price: 1.40, perPersonFactor: 1 },
    { id: 'jugos_naturales', name: 'Jugos naturales', price: 3.00, perPersonFactor: 1 }
  ],
  Agregados: [
    { id: 'musica', name: 'musica y dj (no obligatorio)', price: 150, fixed: true, perPersonFactor: 0.0000001 },
    { id: 'decoracion', name: 'decoración (solo bodas)', price: 3, fixed: true, perPersonFactor: 0.92, tul: 0.50, flower: 0.42 }
  ]
}

export default ITEM_GROUPS;
