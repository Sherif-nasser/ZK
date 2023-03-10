// Copyright (c) 2021, Peter and contributors
// For license information, please see license.txt

frappe.ui.form.on('ZK Device', {
	refresh: function(frm) {
        if(!frm.is_new()){
            frm.add_custom_button(__("Get Logs"),function () {
                frm.events.get_device_logs(frm)
            })
             frm.add_custom_button(__("Sync Employee"),function () {
                frm.events.sync_employee(frm)
            })
        }
	},
    get_device_logs : function (frm) {
	    frm.save()
        frappe.call({
                    method : "get_device_log",
                    doc:frm.doc,
            freeze:true
            ,
                    callback:function () {
                        frm.refresh()
                    }
                })
    },
    sync_employee : function (frm) {
        frappe.call({
                    method : "zk_integration.zk.doctype.zk_device.zk_device.sync_employee",
                    callback:function () {
                        frm.refresh()
                    }
                })
    }
});
