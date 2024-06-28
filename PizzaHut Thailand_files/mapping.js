var load_lb = load_lb || !isLBLoaded;
profileID = 'default';

/* Begin - APAC Domains */
if ((lbHost.indexOf('sonyliv') != -1)) { profileID = 'sonyliv'; }
if ((lbHost == 'brita.tw') || (lbHost == 'crm.brita.tw')) { profileID = 'brita'; }
if (lbHost == 'sisley-paris.com') { profileID = 'sisley'; }
if ((lbHost == 'sg.puma.com') || (lbHost == 'my.puma.com')) { profileID = 'puma'; }
if (lbHost == 'aia.co.th') { profileID = 'aia-th'; }
if (lbHost == 'shop.scotchthailand.co.th') { profileID = 'scotch-th'; }
if (lbHost == 'subaru.asia') { profileID = 'subaru'; }
if ((lbHost == 'sony.com.vn') || (lbHost == 'promotion.sony.com.vn')) { profileID = 'sony-vn'; }
if ((lbHost == 'anlene.com') || (lbHost == 'kiemtracoxuongkhop.com') || (lbHost == 'anmum.com')) { profileID = 'fonterra-vn'; }
if (lbHost == 'tmrwbyuob.com') { profileID = 'tmrwbyuob-th'; }
if (lbHost == 'suss.edu.sg') { profileID = 'suss-sg'; }
if (lbHost == 'sabeco.com.vn') { profileID = 'sabeco-vn'; }
if (lbHost == 'tal.sg') { profileID = 'tafep-sg'; }
if ((lbHost == 'kennyrogersdelivery.com.ph') || (lbHost == 'merchant-portal.booky.ph') || (lbHost == 'cornerpizza.com.ph')) { profileID = 'kennyrogers'; }
if (lbHost.indexOf('mazda.co.th') != -1) { profileID = 'mazda-th'; }
if (lbHost.indexOf('celcom.com.my') != -1) { profileID = 'celcom-my'; }
/* End - APAC Domains */

/* Begin - US Domains */

// Abbott Labs
if (lbHost.indexOf('abbottmedicaloptics.com') != -1) { profileID = 'abbott'; }
if (lbHost.indexOf('abbottnutrition.com') != -1) { profileID = 'abbott'; }
if (lbHost.indexOf('bringintheharvest.com') != -1) { profileID = 'abbott'; }
if (lbHost.indexOf('eas.com') != -1) { profileID = 'abbott'; }
if (lbHost.indexOf('elecare.com') != -1) { profileID = 'abbott'; }
if (lbHost.indexOf('ensure.com') != -1) { profileID = 'abbott'; }
if (lbHost.indexOf('ensuremaxchallenge.com') != -1) { profileID = 'abbott'; }
if (lbHost.indexOf('firstcheckfamily.com') != -1) { profileID = 'abbott'; }
if (lbHost.indexOf('glucerna.com') != -1) { profileID = 'abbott'; }
if (lbHost.indexOf('juven.com') != -1) { profileID = 'abbott'; }
if (lbHost.indexOf('myfreestyle.com') != -1) { profileID = 'abbott'; }
if (lbHost.indexOf('nutritionnews.abbott') != -1) { profileID = 'abbott'; }
if (lbHost.indexOf('pedialyte.com') != -1) { profileID = 'abbott'; }
if (lbHost.indexOf('pediasure.com') != -1) { profileID = 'abbott'; }
if (lbHost.indexOf('pediatricproconnect.com') != -1) { profileID = 'abbott'; }
if (lbHost.indexOf('protalitynutrition.com') != -1) { profileID = 'abbott'; }
if (lbHost.indexOf('similac.com') != -1) { profileID = 'abbott'; }
if (lbHost.indexOf('zoneperfect.com') != -1) { profileID = 'abbott'; }

// Amtrak
if (lbHost.indexOf('amtrak') != -1) { profileID = 'amtrak'; }

// Bausch & Lomb
if (lbHost.indexOf('alaway.com') != -1) { profileID = 'bausch-lomb'; }
if (lbHost.indexOf('biotrue.com') != -1) { profileID = 'bausch-lomb'; }
if (lbHost.indexOf('biotrue.bl-ops.com') != -1) { profileID = 'bausch-lomb'; }
if (lbHost.indexOf('biotrueonedaylenses.com') != -1) { profileID = 'bausch-lomb'; }
if (lbHost.indexOf('biotruesolution.com') != -1) { profileID = 'bausch-lomb'; }
if (lbHost.indexOf('dryeyeproblems.com') != -1) { profileID = 'bausch-lomb'; }
if (lbHost.indexOf('envive.com') != -1) { profileID = 'bausch-lomb'; }
if (lbHost.indexOf('expectultracomfort.com') != -1) { profileID = 'bausch-lomb'; }
if (lbHost.indexOf('justblink.com') != -1) { profileID = 'bausch-lomb'; }
if (lbHost.indexOf('lumifydrops.com') != -1) { profileID = 'bausch-lomb'; }
if (lbHost.indexOf('lumifyeyes.com') != -1) { profileID = 'bausch-lomb'; }
if (lbHost.indexOf('miebo.com') != -1) { profileID = 'bausch-lomb'; }
if (lbHost.indexOf('ocuvite.com') != -1) { profileID = 'bausch-lomb'; }
if (lbHost.indexOf('preservision.com') != -1) { profileID = 'bausch-lomb'; }
if (lbHost.indexOf('renu.com') != -1) { profileID = 'bausch-lomb'; }
if (lbHost.indexOf('sootheeyedrops.com') != -1) { profileID = 'bausch-lomb'; }
if (lbIframeURL.indexOf('bauschshop.myshopify.com') != -1) { profileID = 'bausch-lomb'; }


// BD Veritor
if (lbHost.indexOf('bdveritorathome.com') != -1) { profileID = 'bd-veritor'; }

// Boots
if (lbHost.indexOf('us.no7beauty.com') != -1) { profileID = 'boots'; }
if (lbHost.indexOf('attach.mikmak.tv') != -1) { profileID = 'boots'; }
if (lbHost.indexOf('shop.no7beauty.com') != -1) { profileID = 'boots'; }

// Chevron
if (lbHost.indexOf('chevron.com') != -1) { profileID = 'chevron'; }
if (lbHost.indexOf('chevronlubricants.com') != -1) { profileID = 'chevron'; }
if (lbHost.indexOf('texaco.com') != -1) { profileID = 'chevron'; }
if (lbHost.indexOf('chevronwithtechron.com') != -1) { profileID = 'chevron'; }
if (lbHost.indexOf('chevronextramile.com') != -1) { profileID = 'chevron'; }
if (lbHost.indexOf('chevrontexacorewards.com') != -1) { profileID = 'chevron'; }

//Church & Dwight
if (lbHost.indexOf('armandhammer.com') != -1) { profileID = 'church-dwight'; }
if (lbHost.indexOf('batistehair.com') != -1) { profileID = 'church-dwight'; }
if (lbHost.indexOf('gettoppik.com') != -1) { profileID = 'church-dwight'; }
if (lbHost.indexOf('gummyvites.com') != -1) { profileID = 'church-dwight'; }
if (lbHost.indexOf('kaboomkaboom.com') != -1) { profileID = 'church-dwight'; }
if (lbHost.indexOf('naircare.com') != -1) { profileID = 'church-dwight'; }
if (lbHost.indexOf('nairsugar.com') != -1) { profileID = 'church-dwight'; }
if (lbHost.indexOf('orajel.com') != -1) { profileID = 'church-dwight'; }
if (lbHost.indexOf('oxiclean.com') != -1) { profileID = 'church-dwight'; }
if (lbHost.indexOf('toppik.com') != -1) { profileID = 'church-dwight'; }
if (lbHost.indexOf('trojanbrands.com') != -1) { profileID = 'church-dwight'; }
if (lbHost.indexOf('tryviviscal.com') != -1) { profileID = 'church-dwight'; }
if (lbHost.indexOf('vitafusionfordogs.com') != -1) { profileID = 'church-dwight'; }
if (lbHost.indexOf('viviscal.com') != -1) { profileID = 'church-dwight'; }
if (lbHost.indexOf('viviscalman.com') != -1) { profileID = 'church-dwight'; }

// CircleK
if (lbHost.indexOf('circlek.com') != -1) { profileID = 'circlek'; }
if (lbHost.indexOf('circlekfleetcards.com') != -1) { profileID = 'circlek'; }
if (lbHost.indexOf('holidayfleetcards.com') != -1) { profileID = 'circlek'; }
if (lbHost.indexOf('inner-circle.circlekoffers.com') != -1) { profileID = 'circlek'; }
if (lbHost.indexOf('sip-and-save.circlekoffers.com') != -1) { profileID = 'circlek'; }

// Clarins
if (lbHost.indexOf('clarinsusa.com') != -1) { profileID = 'clarins'; }

// Colgate - Hills
if (lbHost.indexOf('hillspet.com') != -1) { profileID = 'hills'; }

// David Yurman
if (lbHost.indexOf('davidyurman') != -1) { profileID = 'davidyurman'; }

// Deloitte
if (lbHost.indexOf('deloitte.com') != -1) { profileID = 'deloitte';}

// DHL
if (lbHost.indexOf('dhl.com') != -1) { profileID = 'dhl';}

// DirectAuto
if (lbHost.indexOf('directauto.com') != -1) { profileID = 'directauto'; }
if (lbHost.indexOf('nationalgeneral.com') != -1) { profileID = 'directauto'; }

// EcoLab
if (lbHost.indexOf('sciencecertified.ecolab.com') != -1) { profileID = 'ecolab'; }
if (lbHost.indexOf('ecolab.com') != -1) { profileID = 'ecolab'; }

// Fischer Paykel
if (lbHost.indexOf('dcsappliances.com') != -1) { profileID = 'fischer-paykel'; }

// Forevermark
if (lbHost.indexOf('forevermark.com') != -1) { profileID = 'forevermark'; }

// Hong Kong Tourism
if (lbHost.indexOf('discoverhongkong.com') != -1) { profileID = 'hongkongtourism'; }

// Horizon Pharma
if (lbHost.indexOf('krystexxa.com') != -1) { profileID = 'horizon'; }
if (lbHost.indexOf('tepezza.com') != -1) { profileID = 'horizon'; }
if (lbHost.indexOf('thyroideyes.com') != -1) { profileID = 'horizon'; }
if (lbHost.indexOf('horizontherapeutics.com') != -1) { profileID = 'horizon'; }
if (lbHost.indexOf('uplizna.com') != -1) { profileID = 'horizon'; }

// HSN
if (lbHost.indexOf('hsn.com') != -1) { profileID = 'hsn'; }
if (lbHost.indexOf('purewow.com') != -1) { profileID = 'hsn'; }

// Husqvarna
if (lbHost.indexOf('husqvarna.com') != -1) { profileID = 'husqvarna'; }

// Impossible Foods
if (lbHost.indexOf('impossiblefoods') != -1) { profileID = 'impossiblefoods'; }

// Japan Airlines
if (lbHost.indexOf('jal.co.jp') != -1) { profileID = 'japanairlines'; }

// John Deere
if (lbHost.indexOf('deere.ca') != -1) { profileID = 'john-deere'; }
if (lbHost.indexOf('deere.com') != -1) { profileID = 'john-deere'; }

// Mazda
if (lbHost.indexOf('mazdausa.com') != -1) { profileID = 'mazda'; }

// Medtronic
if (lbHost.indexOf('medtronicdiabetes.com') != -1) { profileID = 'medtronicdiabetes'; }
if (lbHost.indexOf('medtronic.com') != -1) { profileID = 'medtronicdiabetes'; }

// Merlin (LegoLand)
if (lbHost.indexOf('legoland.com') != -1) { profileID = 'merlin'; }
if (lbHost.indexOf('peppapigthemepark.com') != -1) { profileID = 'merlin'; }

// Mizkan
if (lbHost.indexOf('nakanoflavors.com') != -1) { profileID = 'mizkan'; }
if (lbHost.indexOf('naturesintentvinegars.com') != -1) { profileID = 'mizkan'; }
if (lbHost.indexOf('mizkan.com') != -1) { profileID = 'mizkan'; }
if (lbHost.indexOf('farmtoforksauce.com') != -1) { profileID = 'mizkan'; }
if (lbHost.indexOf('ragu.com') != -1) { profileID = 'mizkan'; }
if (lbHost.indexOf('angosturabitters.com') != -1) { profileID = 'mizkan'; }

// Naturemade
if (lbHost.indexOf('naturemade.com') != -1) { profileID = 'naturemade'; }

// NZ Tourism
if (lbHost.indexOf('nzmadewithcare.com') != -1) { profileID = 'nztourism'; }

// Pearson
if (lbHost.indexOf('ac.uk') != -1) { profileID = 'pearson'; }
if (lbHost.indexOf('adelaide.edu.au') != -1) { profileID = 'pearson'; }
if (lbHost.indexOf('maryville.edu') != -1) { profileID = 'pearson'; }
if (lbHost.indexOf('regiscollege.edu') != -1) { profileID = 'pearson'; }
if (lbHost.indexOf('wsu.edu') != -1) { profileID = 'pearson'; }
if (lbHost.indexOf('bradley.edu') != -1) { profileID = 'pearson'; }
if (lbHost.indexOf('uab.edu') != -1) { profileID = 'pearson'; }
if (lbHost.indexOf('usc.edu') != -1) { profileID = 'pearson'; }
if (lbHost.indexOf('my.site.com') != -1) { profileID = 'pearson'; }
if (lbHost.indexOf('norwich.edu') != -1) { profileID = 'pearson'; }
if (lbHost.indexOf('hpu.edu') != -1) { profileID = 'pearson'; }
if (lbHost.indexOf('duq.edu') != -1) { profileID = 'pearson'; }


// Pella
if (lbHost.indexOf('pella.com') != -1) { profileID = 'pella'; }

// QVC
if (lbHost.indexOf('qvc.com') != -1) { profileID = 'qvc'; }

// Savencia
if (lbHost.indexOf('alouettecheese.com') != -1) { profileID = 'savencia'; }

//TEQ
if (lbHost.indexOf('queensland.com') != -1) { profileID = 'teq'; }

//The Cheesecake Factory
if (lbHost.indexOf('thecheesecakefactory.com') != -1) { profileID = 'tcf'; }

//TravelEdge
if (lbHost.indexOf('traveledge.com') != -1) { profileID = 'traveledge'; }

// Valeant
if (lbHost.indexOf('altreno.com') != -1) { profileID = 'valeant'; }

// Volvo
if (lbHost.indexOf('volvocars.com') != -1) { profileID = 'volvo'; }

// Zespri
if (lbHost.indexOf('zespri.com') != -1) { profileID = 'zespri'; }

/* End - US Domains */

if (load_lb) {
	appendScript('//cdn-akamai.mookie1.com/adv/' + profileID + '.js', 'lb_adv');
	var lbLoaded = true;
	if (isInDebug) { loadLogger(); } 
}



