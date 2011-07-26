﻿/*
 * WebUI - The WEB interface for uTorrent - http://www.utorrent.com
 * NO COPYCATS of language update
 * 
 * == BEGIN LICENSE ==
 * 
 * Licensed under the terms of any of the following licenses at your
 * choice:
 * 
 *  - GNU General Public License Version 2 or later (the "GPL")
 *    http://www.gnu.org/licenses/gpl.html
 * 
 *  - GNU Lesser General Public License Version 2.1 or later (the "LGPL")
 *    http://www.gnu.org/licenses/lgpl.html
 * 
 *  - Mozilla Public License Version 1.1 or later (the "MPL")
 *    http://www.mozilla.org/MPL/MPL-1.1.html
 * 
 * == END LICENSE ==
 * 
 * File Name: tr.js
 * 	Turkish language file.
 * 
 * File Author:
 * 		Turgay Yıldıran (votkalivirgul@gmail)
 */
 
 var theUILang =
 {
 //all used
 kbs				: "kB/s",
 
 
 //Settings window
 
 General			: "Genel",
 Downloads			: "İndirilenler",
 Connection			: "Bağlantı",
 BitTorrent			: "BitTorrent",
 Queueing			: "Kuyruk Ayarları",
 Scheduler			: "Zamanlama Çizelgesi",
 Advanced			: "Gelişmiş",
 User_Interface		: "Kullanıcı Arayüzü",
 Confirm_del_torr	: "Torrent(ler)i silerken uyar",
 Update_GUI_every	: "Arayüz yenileme süresi",
 ms					: "ms",
 Alt_list_bckgnd	: "Liste arkaplan rengi",
 Show_cat_start		: "Açılışta kategorileri göster",
 Show_det_start		: "Açılışta ayrıntıları göster",
 Dnt_start_down_auto: "İndirmeyi otomatik başlatma",
 Other_sett			: "Diğer Ayarlar",
 Listening_Port		: "Dinleme Portu",
 Port_f_incom_conns	: "Gelen bağlantılar için kullanılan port",
 Rnd_port_torr_start: "rTorrent her açılışında rastgele port seç",
 Type				: "Tür",
 Bandwidth_Limiting : "Bandgenişliği Sınırlandırma",
 Global_max_upl		: "En yüksek gönderme değeri",
 unlimited			: "sınırsız",
 Glob_max_downl		: "En yüksek indirme değeri",
 Add_bittor_featrs	: "İsteğe Bağlı BitTorrent Özellikleri",
 En_DHT_ntw			: "DHT ağını etkinleştir",
 Peer_exch			: "Eş Değişimi",
 Ip_report_track	: "İzleyiciye bildirilecek IP/Sunucu adı",
 Disabled			: "Devre dışı",
 Enabled			: "Etkin",
 Advanced			: "Gelişmiş",
 Cancel				: "İptal",
 uTorrent_settings	: "rTorrent Ayarları",
 
// Main window
 Doesnt_support		: "ruTorrent tarayıcınızı desteklemiyor.",
 Name				: "Dosya İsmi",
 Status				: "Durum",
 Size				: "Boyut",
 Done				: "Tamamlandı",
 Downloaded			: "İndirilmiş",
 Uploaded			: "Gönderilmiş",
 Ratio				: "Ratio",
 DL					: "DL",
 UL					: "UL",
 ETA				: "Kalan Süre",
 Label				: "Etiket",
 Peers				: "Eşler",
 Seeds				: "Ortaklar",
 Avail				: "Ulaşıl.",
 Remaining			: "Kalan",
 Priority			: "Öncelik",
 Download			: "Yükleme",
 Upload				: "Gönderme",
 Not_torrent_file	: "Bu geçerli bir torrent dosyası değildir.",
 Pausing			: "Duraklatılıyor",
 Seeding			: "Ortalanıyor",
 Downloading		: "Yükleniyor",
 Checking			: "Kontrol ediliyor",
 Error				: "Hata",
 Queued				: "Sırada",
 Finished			: "Tamamlandı",
 Stopped			: "Durdu",
 Request_timed_out	: "İstek zaman aşımına uğradı.",
 
 Start				: "Başlat",
 Pause				: "Duraklat",
 Stop				: "Durdur",
 Force_recheck		: "Tekrar Kontrol Et",
 New_label			: "Yeni etiket...",
 Remove_label		: "Etiketi kaldır",
 Labels				: "Etiketler",
 Remove				: "Kaldır",
 Delete_data		: "Veriyi Sil",
 Remove_and			: "Kaldır Ve",
 Details			: "Ayrıntılar...",
 Properties			: "Özellikler...",
 of					: "tanesine", 		//this two creates line 
 connected			: "içinden bağlı",	//  XX of YY connected
 High_priority		: "Yüksek",
 Normal_priority	: "Normal",
 Low_priority		: "Düşük",
 Dont_download		: "İndirme",
 Files				: "Dosyalar",
 Logger				: "Rapor",
 
 s					: "s",    // part of "KB/s"
 bytes				: "bytes",
 KB					: "KB",
 MB					: "MB",
 GB					: "GB",
 TB					: "TB",
 PB					: "PB",
 
 // main WND s
 Loading			: "Bekleyiniz...",
 Torrent_file		: "Torrent dosyası",
 Torrent_URL		: "Torrent URL",
 Torrent_properties	: "Torrent Özellikleri",
 Trackers			: "İzleyiciler",
 Bandwidth_sett		: "Bandgenişliği Özellikleri",
 Number_ul_slots	: "Gönderme yuva sayısı",
 Peer_ex			: "Eş Değişimi",
 About				: "Hakkında",
 Enter_label_prom	: "Seçtiğiniz torrentler için yeni bir etiket giriniz",
 Remove_torrents	: "Torrent(ler)i Kaldır",
 Rem_torrents_prompt: "Torrent(ler)i kaldırmak istediğinizden emin misiniz?",
 All				: "Toplam",
 Active				: "Aktif",
 Inactive			: "Pasif",
 No_label			: "Etiket Yok",
 Transfer			: "Aktarım",
 Time_el			: "Geçen Süre",
 Remaining			: "Kalan",
 Share_ratio		: "Ratio Oranı",
 Down_speed			: "İndirme Hızı",
 Down_limit			: "İnd. Sınırı",
 Ul_speed			: "Yükleme Hızı",
 Ul_limit			: "Yük. Sınırı",
 Wasted				: "Boşa Giden",
 Tracker			: "İzleyici",
 Track_URL			: "İzleyici URL",
 Track_status		: "İzleyici Durumu",
 Save_as			: "Kaydedilen Yer",
 Created_on			: "Oluşturulma Tarihi",
 Comment			: "Yorum",
 
 
 //buttons
 add_button			: "Dosya Ekle",
 add_url			: "URL Ekle",
 ok				: "   Tamam   ",
 Cancel				: " İptal ",
 no				: "   Hayır   ",
 
 mnu_add			: "Torrent Ekle",
 mnu_remove			: "Kaldır",
 mnu_start			: "Başlat",
 mnu_pause			: "Duraklat",
 mnu_stop			: "Durdur",
 mnu_rss			: "RSS Yükleyici",
 mnu_settings			: "Ayarlar",
 mnu_search			: "Arama",
 mnu_lang			: "Dil",
 
 //Other variables added by spide
 torrent_add			: "Torrent Ekle", /*Caption of torrent add box*/
 time_w				: "h ", /*for x weeks*/
 time_d				: "g ", /*for x days remaining*/
 time_h				: "s ", /*for x hours remaining*/
 time_m				: "d ", /*for x minutes remaining*/
 time_s				: "n ", /*for x seconds remaining*/

 //Novik's addition
 Base_directory    		: "Klasör",
 Number_Peers_min		: "En az eş sayısı",
 Number_Peers_max		: "En fazla eş sayısı",
 Tracker_Numwant		: "İstenen eş sayısı",
 Number_Peers_For_Seeds_min	: "En az ortak sayısı",
 Number_Peers_For_Seeds_max	: "En fazla ortak sayısı",
 Enable_port_open		: "Dinleme Portunu açın",
 dht_port			: "UDP portunu DHT için kullanın",
 Ather_Limiting			: "Diğer sınırlandırmalar",
 Number_dl_slots		: "İndirme yuva sayısı",
 Glob_max_memory		: "En fazla hafıza kullanımı",
 Glob_max_files			: "En fazla açık dosya sayısı", 
 Glob_max_http			: "En fazla açık http bağlantı sayısı",
 Glob_max_sockets		: "En fazla açık socket sayısı",
 Ather_sett			: "Diğer",
 Directory_For_Dl		: "Yüklemeler için varsayılan klasör",
 Check_hash			: "Yüklemeden sonra dosya doğrulaması yap",
 Hash				: "Doğrulama",
 IsOpen				: "Açık",
 DisableTracker			: "Devre dışı",
 EnableTracker			: "Etkin",
 ClientVersion			: "İstemci",
 Flags				: "Bayrak",
 ReqTimeout			: "Talep zaman aşımı",
 GetTrackerMessage		: "İzleyiciden mesaj aldınız",
 Help				: "Yardım",
 PHPDoesnt_enabled		: "Web sunucunuz PHP desteği sağlamıyor. Bunu düzeltiniz ve tekrar deneyiniz.",
 Speed				: "Hız",
 Dont_add_tname			: "Torrent ismiyle klasör ismi aynı olmasın",
 Free_Disk_Space		: "Boş disk alanı",
 badXMLRPCVersion		: "rTorrent, i8 desteği olmayan eski bir xmlrpc-c kütüphanesi versiyonuyla derlenmiş. Versiyon en az 1.11 olmalıdır. Bazı özellikler çalışmayacaktır.",
 badLinkTorTorrent		: "rTorrent bağlantısında hata. rTorrent'in çalıştığından emin olun. rTorrent ayar dosyası config.php'deki $scgi_port ve $scgi_host ayarlarını kontrol edin.",
 badUploadsPath			: "Web sunucu 'torrents' klasörüne okuma/yazma/çalıştırma erişimi vermemektedir. Bu durumda ruTorrent'e torrent ekleyemezsiniz. Chomod ayarlarını kontrol ediniz.",
 badSettingsPath		: "Web sunucu 'settings' klasörüne okuma/yazma/çalıştırma erişimi vermemektedir. Bu durumda ruTorrent ayarlarını değiştiremezsiniz. Chmod ayarlarını kontrol ediniz.",
 mnu_help			: "Hakkında",
 badUploadsPath2		: " rTorrent kullanıcısının torrent klasöründe okuma/çalıştırma yetkisi yoktur. Bu durumda torrent ekleyemezsiniz. Chmod ayarlarını kontrol ediniz.",
 View				: "Görünüm",
 AsList				: "liste olarak",
 AsTree				: "ağaç yapısı olarak",
 Group				: "Grup",
 SuperSeed			: "Öncelikli-Kaynak",
 badTestPath			: "rTorrent kullanıcısının ./test.sh dosyasına okuma/çalıştırma yetkisi yoktur. ruTorrent çalışmayacaktır. Chmod ayarlarını kontrol ediniz.",
 badSettingsPath2		: "rTorrent kullanıcısının settings klasöründe okuma/yazma/çalıştırma yetkisi yoktur. Chmod ayarlarını kontrol ediniz.",
 scrapeDownloaded		: "Yüklenen",
 Total				: "Toplam",
 PCRENotFound			: "PHP'nin PCRE modülü yüklü değildir. ruTorrent çalışmayacaktır.",
 addTorrentSuccess		: "torrent başarıyla rTorrent'ten geçmiştir.",
 addTorrentFailed		: "Hata: torrent, rTorrent'ten geçememiştir.",
 pnlState			: "Durum",
 newLabel			: "Yeni Etiket",
 enterLabel			: "Etiket Girin",
 UIEffects			: "Show effects for UI elements",
 Plugins			: "Plugins",
 plgName			: "Name",
 plgStatus			: "Status",
 plgLoaded			: "Loaded",
 plgDisabled			: "Disabled",
 plgVersion			: "Version",
 plgAuthor			: "Author",
 plgDescr			: "Description",
 mnu_go				: "Go",
 pluginCantStart		: "plugin can't start for unknown reason.",
 doFastResume			: "Fast resume",
 innerSearch			: "Local torrents",
 removeTeg			: "Remove tag",
 errMustBeInSomeHost		: "ruTorrent and rTorrent must be installed on the same host. Plugin will not work.",
 warnMustBeInSomeHost		: "ruTorrent and rTorrent must be installed on the same host. Some functionality will be unavailable.",
 plgShutdown			: "Shutdown",
 limit				: "Sınırı",
 speedList			: "Speed popup list (comma-separated)",
 ClearButton			: "Clear",
 dontShowTimeouts		: "Ignore message about timeouts",
 fullTableRender		: "Full render of large tables",
 showScrollTables		: "Show table contents while scrolling",
 idNotFound			: "rTorrent's user can't access 'id' program. Some functionality will be unavailable.",
 gzipNotFound			: "Web-server can't access 'gzip' program. ruTorrent will not work.",
 cantObtainUser			: "ruTorrent can't detect the uid or rtorrent user. Some functionality will be unavailable.",
 retryOnErrorTitle		: "If rtorrent is not available try again after",
 retryOnErrorList		: { 0: "Don't try again", 30: "30 sec", 60: "1 min", 120: "2 min", 300: "5 min", 900: "15 min" },
 statNotFound			: "rTorrent's user can't access 'stat' program. Some functionality will be unavailable.",
 statNotFoundW			: "Web-server user can't access 'stat' program. Some functionality will be unavailable.",
 badrTorrentVersion		: "This version of rTorrent doesn't support this plugin. Plugin will not work. rTorrent version must be >=",
 badPHPVersion                  : "This version of PHP doesn't support this plugin. Plugin will not work. PHP version must be >=",
 rTorrentExternalNotFoundError	: "Plugin will not work. rTorrent's user can't access external program",
 rTorrentExternalNotFoundWarning: "Some functionality will be unavailable. rTorrent's user can't access external program",
 webExternalNotFoundError	: "Plugin will not work. Web-server user can't access external program",
 webExternalNotFoundWarning	: "Some functionality will be unavailable. Web-server user can't access external program",
 rTorrentBadScriptPath		: "Plugin will not work. rTorrent's user can't access file for read/execute",
 rTorrentBadPHPScriptPath	: "Plugin will not work. rTorrent's user can't access file for read",
 dependenceError		: "Plugin will not work. It require existence of plugin(s)",
 peerAdd			: "Add peer...",
 peerBan			: "Ban",
 peerKick			: "Kick",
 peerSnub			: "Snub",
 peerDetails			: "Details",
 peerUnsnub			: "Unsnub",
 peerAddLabel			: "Enter IP/Hostname[:port]",
 noTorrentList			: "Torrent list not yet available, connection to rtorrent not established.",
 yes				: "yes",
 no				: "no",
 DateFormat			: "Date format",
 DLStrategy			: "Download strategy",
 prioritizeFirst		: "Leading chunk first",
 prioritizeLast			: "Trailing chunk first",
 prioritizeNormal		: "Normal",
 updateTracker			: "Update trackers",
 scrapeUpdate			: "Was updated",
 trkInterval			: "Interval",
 logAutoSwitch			: "Autoswitch to 'Log' tab"
 };
